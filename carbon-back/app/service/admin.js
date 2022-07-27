'use strict';

const Service = require('egg').Service;

const bcrypt = require('bcrypt');
const saltRounds = 10;

class AdminService extends Service {
  async find(id) {
    const user = await this.ctx.model.Admin.findOne({ _id: id });
    return user;
  }

  async create(username, password) {
    const user = await this.ctx.model.Admin.create({
      username,
      password: await bcrypt.hash(password, saltRounds),
    });
    return user;
  }

  async authenticate(username, password) {
    const user = await this.ctx.model.Admin.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }
}

module.exports = AdminService;
