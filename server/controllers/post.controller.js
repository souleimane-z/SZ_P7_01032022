const db = require('../models');
const User = db.user;
const Post = db.post;
const Comment = db.comment;

module.exports.postOnePost = (req, res) => {
  Post.create({
    content: req.body.content,
    imageUrl: req.file
      ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      : null,
    idUser: req.body.idUser,
  })
    .then((response) =>
    
    res.status(201).send({
       data: response.dataValues
    })
     )
    .catch((error) => res.status(400).json({ error }));
};

module.exports.getAllPosts = (req, res) => {
  Post.findAll({
    raw: true,
    include: {
      model: User,
    },
    order: [['idPost', 'DESC']],
  })
    .then((posts) => {
      Comment.findAll({
        raw: true,
        include: {
          model: User,
        },
      }).then((comments) => {
        comments.forEach((comment) => {
          const index = posts.findIndex(
            (post) => post.idPost === comment.idPost
          );
          if (index > -1) {
            if (!posts[index].comments) {
              posts[index].comments = [];
            }
            posts[index].comments.push(comment);
          }
        });
        return res.status(200).json(posts);
      });
    })
    .catch((error) => res.status(400).json({ error }));
};

module.exports.getOnePost = (req, res) => {
  Post.findByPk(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

module.exports.deleteOnePost = (req, res) => {
  Post.findByPk(req.body.idPost);
  Comment.destroy({
    where: {
      idPost: req.params.id,
    },
  });
  Post.destroy({
    where: {
      idPost: req.params.id,
    },
  })
    .then(() => res.status(200).json({ message: 'Post supprimé ' }))
    .catch((error) => res.status(400).json({ error }));
};
