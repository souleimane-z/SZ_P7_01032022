module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define('posts', {
    idPost: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    imageUrl: {
      type: Sequelize.TEXT,
    },
    idUser: {
      type: Sequelize.INTEGER,
      required: true,
    },
  });

  return Post;
};
