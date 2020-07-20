'use strict';
module.exports = (sequelize, DataTypes) => {
  const fields = sequelize.define('fields', {
    unit: DataTypes.INTEGER,
    crop: DataTypes.STRING,
    acreage: DataTypes.STRING,
    long: DataTypes.INTEGER,
    lat: DataTypes.INTEGER
  }, {});
  fields.associate = function(models) {
    // associations can be defined here    
    models.field.belongsTo(models.user)
    models.field.belongsToMany(models.user, { through: "usersfields" })
    
  };
  return fields;
};