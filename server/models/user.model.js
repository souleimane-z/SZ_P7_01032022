module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'users',
    {
      idUser: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      profilePicture: {
        type: Sequelize.TEXT,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: '0',
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['username', 'email'],
        },
      ],
    }
  );
  return User;
};
