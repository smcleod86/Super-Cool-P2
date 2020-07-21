'use strict';
module.exports = (sequelize, DataTypes) => {
  const field = sequelize.define('field', {
    unit: DataTypes.STRING,
    crop: DataTypes.STRING,
    acreage: DataTypes.STRING,
    long: DataTypes.INTEGER,
    lat: DataTypes.INTEGER
  }, {});
  field.associate = function(models) {
    // associations can be defined here
  };
  return field;
};