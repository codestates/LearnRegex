'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      quiz.hasMany(models.users_quiz, { foreignKey: 'quizId', sourceKey: 'id', onDelete: 'cascade' });
      quiz.belongsTo(models.users, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
    }
  }
  quiz.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testCase: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      explanation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isClear: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isMade: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'quiz',
      tableName: 'quiz',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return quiz;
};
