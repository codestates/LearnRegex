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
      models.quiz.belongsToMany(models.users, { through: 'users_quiz', foreignKey: 'quizId', sourceKey: 'id' });

      models.quiz.belongsTo(models.users, { foreignKey: 'userId', sourceKey: 'id', onDelete: 'cascade' });
    }
  }
  quiz.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testCase: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testCaseTarget: {
        type: DataTypes.STRING,
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
