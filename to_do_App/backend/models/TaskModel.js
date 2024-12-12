const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('to_do_', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
});

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
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
    modelName: 'Tasks',
    timestamps: false,
  }
);

module.exports = Task;