const { Sequelize, Model, DataTypes } = require('sequelize');

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        details: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
      },
      {
        sequelize,
        modelName: 'Task',
        timestamps: false,
      }
    );
  }
}

module.exports = Task;
