module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('comments', {
    idComment: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    idUser: {
      type: Sequelize.INTEGER,
      required: true,
    },
    idPost: {
      type: Sequelize.INTEGER,
      required: true,
    },
  });

  return Comment;
};
