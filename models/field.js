'use strict';
module.exports = (sequelize, DataTypes) => {
  const field = sequelize.define('field', {
    unit: DataTypes.STRING,
    crop: DataTypes.STRING,
    acerage: DataTypes.STRING
  }, {});
  field.associate = function(models) {
    // associations can be defined here
    //models.field.belongsToMany(models.users)
    //models.field.hasOne(models.crop)
  };
  return field;
};