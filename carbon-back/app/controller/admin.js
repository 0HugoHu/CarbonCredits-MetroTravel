'use strict';

const Controller = require('egg').Controller;


class AdminController extends Controller {
  async login() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body || {};
    const user = await service.admin.authenticate(username, password);

    if (user) {
      ctx.session.uid = user._id;
      ctx.body = {};
      ctx.status = 200;
    } else {
      ctx.body = {
        message: '用户名或密码错误',
      };
      ctx.status = 403;
    }
  }
  async logout() {
    const { ctx } = this;
    ctx.session = null;
    ctx.status = 200;
  }
  async info() {
    const { ctx, service } = this;

    if (!ctx.session.uid) {
      ctx.status = 401;
      return;
    }
    const user = await service.admin.find(ctx.session.uid);
    ctx.body = {
      username: user.username,
      permissions: user.permissions,
    };
  }
}

module.exports = AdminController;
