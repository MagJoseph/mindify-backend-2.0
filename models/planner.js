'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planner extends Model {
   
    static associate(models) {
        Planner.belongsTo(models.User, {
          foreignKey: "user_id",
          as: "user",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        });
    }
  }
  Planner.init(
    {
      userId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      plannedDate: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Planner",
      tableName: "planner",
    }
  );
  return Planner;
};