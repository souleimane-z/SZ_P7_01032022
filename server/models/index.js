const config = require('../config/db.config.js');

const Sequelize = require('sequelize');

// Renseignez vos propres informations
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  define: {
    timestamps: false,
  },
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model')(sequelize, Sequelize);
db.comment = require('./comment.model')(sequelize, Sequelize);
db.post = require('./post.model')(sequelize, Sequelize);

db.user.hasMany(db.post, {
  foreignKey: 'idUser',
});

db.post.belongsTo(db.user, {
  foreignKey: 'idUser',
});

db.comment.belongsTo(db.user, {
  foreignKey: 'idUser',
});

module.exports = db;
