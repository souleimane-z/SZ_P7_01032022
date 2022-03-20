const db = require('../models');
const Post = db.post;
const Comment = db.comment;
const User = db.user;

module.exports.getOnePost = (req, res) => {
  Post.findByPk(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
};

module.exports.postOneComment = (req, res) => {
  Comment.create({
    comment: req.body.comment,
    idPost: req.body.idPost,
    idUser: req.params.id,
  })
    .then((response) =>
    
    res.status(201).send({
       data: response.dataValues
    })
     )
    .catch((error) => res.status(400).json({ error }));
};

module.exports.deleteOneComment = (req, res) => {
  Comment.destroy({
    where: {
      idComment: req.params.id,
    },
  })
    .then(() => res.status(200).json({ message: 'Commentaire supprimé ' }))
    .catch((error) => res.status(400).json({ error }));
};
