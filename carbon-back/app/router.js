'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/home', controller.home.index);

  router.post('/api/admin/login', controller.admin.login);
  router.get('/api/admin/info', controller.admin.info);
  router.post('/api/admin/logout', controller.admin.logout);
};
