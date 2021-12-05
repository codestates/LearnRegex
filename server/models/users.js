'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.users_quiz, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
      users.hasMany(models.quiz, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
    }
  }
  users.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      socialType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verifyEmail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'users',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return users;
};
