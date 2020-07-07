'use strict';
module.exports = (sequelize, DataTypes) => {
  const field = sequelize.define('field', {
    userId: DataTypes.INTEGER,
    cropId: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    crop: DataTypes.STRING,
    acreage: DataTypes.STRING
  }, {});
  field.associate = function(models) {
    // associations can be defined here
  };
  return field;
};