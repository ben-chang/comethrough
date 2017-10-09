const routes = require('express').Router();
const users = require('../controllers/users');
const authentications = require('../controllers/authentications');

routes.route('/register')
  .post(authentications.register);
routes.route('/login')
  .post(authentications.login);

routes.route('/users')
  .get(users.index);
routes.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .patch(users.update);

module.exports = routes;
