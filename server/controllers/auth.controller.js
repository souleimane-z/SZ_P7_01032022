const db = require('../models');
const config = require('../config/auth.config');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
  .then((response) =>
    
  res.status(201).send({
     data: response.dataValues
  })
   )
    .catch((error) => res.status(400).json({ error }));
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: 'Données incorrectes.' });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: 'Données incorrectes.' });
          }

          res.status(200).send({
            idUser: user.idUser,
            email: user.email,
            username: user.username,
            message: 'User connected',
            accessToken: jwt.sign(
              {
                userId: user.idUser,
              },
              config.secret,
              { expiresIn: '24h' }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
