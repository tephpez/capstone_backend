'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Park.hasMany(models.Find, { 
        foreignKey: 'parkId' ,
        as: 'finds',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Park.init(
    {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mapUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hours: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    address:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    sequelize,
    modelName: 'Park',
    tableName: 'parks'

  });
  return Park;
};



//  SETUP    //////////////////////////////////////////////////////////////////////////////////////////////
//  CODE     //////////////////////////////////////////////////////////////////////////////////////////////
//  SWEEP    