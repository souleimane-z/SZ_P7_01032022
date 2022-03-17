const multer = require('../middleware/multer-config');
const controller = require('../controllers/post.controller');
const authJwt = require('../middleware/authJwt');

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.get('/api/posts', authJwt, multer, controller.getAllPosts);
  app.get('/api/post/:id', authJwt, controller.getOnePost);
  app.post('/api/post', multer, controller.postOnePost);
  app.delete('/api/post/:id', authJwt, controller.deleteOnePost);
};
