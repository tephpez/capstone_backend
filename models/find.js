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
      // define association here
    }
  }
  Find.init({
    commonName: DataTypes.STRING,
    botanicalName: DataTypes.STRING,
    uses: DataTypes.STRING,
    category: DataTypes.STRING,
    poisonWarning: DataTypes.STRING,
    dateFound: DataTypes.DATE,
    notes: DataTypes.STRING,
    picOne: DataTypes.STRING,
    picTwo: DataTypes.STRING,
    picThree: DataTypes.STRING,
    picFour: DataTypes.STRING,
    picFive: DataTypes.STRING,
    mapsLink: DataTypes.STRING,
    abundanceRating: DataTypes.INTEGER,
    locationDesc: DataTypes.STRING,
    landmarks: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Find',
    tableName: 'finds'
  });
  return Find;
};