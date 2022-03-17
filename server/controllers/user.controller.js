const db = require('../models');
const User = db.user;
const Comment = db.comment;
const Post = db.post;

module.exports.getAllUsers = (req, res) => {
  User.findAll(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};

module.exports.getOneUser = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};

module.exports.deleteOneUser = (req, res) => {
  Comment.destroy({
    where: {
      idUser: req.params.id,
    },
  });
  Post.destroy({
    where: {
      idUser: req.params.id,
    },
  });
  User.destroy({
    where: {
      idUser: req.params.id,
    },
  })
    .then(() => res.status(200).json({ message: 'Utilisateur supprimé ' }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports.updateUsername = (req, res) => {
  User.update(
    {
      username: req.body.username,
    },
    {
      where: {
        idUser: req.params.id,
      },
    }
  )
    .then(() => res.status(200).json({ message: 'Utilisateur modifié !' }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports.updateProfilePicture = (req, res) => {
  User.update(
    {
      profilePicture: `${req.protocol}://${req.get('host')}/images/${
        req.file.filename
      }`,
    },
    {
      where: {
        idUser: req.body.idUser,
      },
    }
  )
    .then(() => res.status(200).json({ message: 'Photo modifiée !' }))
    .catch((error) => res.status(400).json({ error }));
};
