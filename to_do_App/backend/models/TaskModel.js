const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('to_do_', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isIn: [['pending', 'completed']],
          },
        },
      },
      {
        sequelize,
        modelName: 'Task',
        tableName: 'tasks',
        timestamps: false,
      }
    );
  }
}

Task.init(sequelize);

module.exports = Task;
