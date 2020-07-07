'use strict';
module.exports = (sequelize, DataTypes) => {
  const crop = sequelize.define('crop', {
    cropId: DataTypes.INTEGER,
    crop: DataTypes.STRING,
    variety: DataTypes.STRING
  }, {});
  crop.associate = function(models) {
    // associations can be defined here
    models.crop.belongsTo(model.field)
    models.crop.hasMany(model.user)
  };
  return crop;
};