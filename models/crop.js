'use strict';
module.exports = (sequelize, DataTypes) => {
  const crop = sequelize.define('crop', {
    cropId: DataTypes.INTEGER,
    crop: DataTypes.STRING,
    variety: DataTypes.STRING
  }, {});
  crop.associate = function(models) {
    // associations can be defined here
  };
  return crop;
};