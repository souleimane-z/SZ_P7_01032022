const authJwt = require('../middleware/authJwt');
const multer = require('../middleware/multer-config');

const controller = require('../controllers/user.controller');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/api/users', authJwt, controller.getAllUsers);
  app.get('/api/user/:id', authJwt, controller.getOneUser);
  app.delete('/api/user/:id', authJwt, controller.deleteOneUser);
  app.put('/api/user/:id', authJwt, controller.updateUsername);
  app.put('/api/user', authJwt, multer, controller.updateProfilePicture);
};
