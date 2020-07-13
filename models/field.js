'use strict';
module.exports = (sequelize, DataTypes) => {
  const field = sequelize.define('field', {
    unit: DataTypes.STRING,
    crop: DataTypes.STRING,
    acreage: DataTypes.STRING
  }, {});
  field.associate = function(models) {
    // associations can be defined here
    models.field.belongsTo(models.user)
    models.field.belongsToMany(models.user, { through: "usersfields" })
  };
  return field;
};