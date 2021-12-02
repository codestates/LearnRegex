'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_quiz.belongsTo(models.users, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
      users_quiz.belongsTo(models.quiz, { foreignKey: 'quizId', sourceKey: 'id', onDelete: 'cascade' });
    }
  }
  users_quiz.init(
    {},
    {
      sequelize,
      modelName: 'users_quiz',
      tableName: 'users_quiz',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return users_quiz;
};
