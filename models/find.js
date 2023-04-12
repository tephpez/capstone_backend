'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Find extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Find.belongsTo(models.User, { 
        foreignKey: 'userId',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE' 
      })
      Find.belongsTo(models.Park, { 
        foreignKey: 'parkId',
        as: 'location',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'  
      })
    }
  }
  Find.init(
    {
      commonName: {
        type: DataTypes.STRING,
        allowNull: false
      },

      botanicalName: {
        type: DataTypes.STRING,
        allowNull: true
      },

      uses: {
        type: DataTypes.STRING,
        allowNull: true
      },

      category: {
        type: DataTypes.STRING,
        allowNull: false
      },

      poisonWarning: {
        type: DataTypes.STRING,
        allowNull: true
      },

      dateFound: {
        type:DataTypes.DATEONLY,
        allowNull: false
      },

      notes: {
        type: DataTypes.STRING,
        allowNull: true
      },

      picOne: {
        type: DataTypes.STRING,
        allowNull: false
      },

      picTwo: {
        type: DataTypes.STRING,
        allowNull: true
      },

      picThree: {
        type: DataTypes.STRING,
        allowNull: true
      },

      picFour: {
        type: DataTypes.STRING,
        allowNull: true
      },

      picFive: {
        type: DataTypes.STRING,
        allowNull: true
      },

      mapsLink: {
        type: DataTypes.STRING,
        allowNull: false
      },

      abundanceRating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      
      locationDesc: {
        type: DataTypes.STRING,
        allowNull: false
      },

      landmarks: {
        type: DataTypes.STRING,
        allowNull: true
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'userId',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },

      parkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'parkId',
        onDelete: 'CASCADE',
        references: {
          model: 'parks',
          key: 'id'
        }
      }
    },

  {
    sequelize,
    modelName: 'Find',
    tableName: 'finds'
  });
  return Find;
};