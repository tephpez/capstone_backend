'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Find, { 
        foreignKey: 'userId' ,
        as: 'finds',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init({
    username: {
      type:DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currentLocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profPic: {
      type: DataTypes.STRING,
      allowNull: false
  }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'

  });
return User;
};