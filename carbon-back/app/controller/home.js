'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const body = {};
    ctx.body = body;

    body.notice = ((await ctx.model.Notice.findOne({}).sort({ updatedAt: -1 })) || { content: null }).content;
    body.newsItems = await ctx.model.News.find({}).sort({ createdAt: -1 }).limit(6);
    body.headerImages = await ctx.model.HeaderImage.find({});
  }
}

module.exports = HomeController;
