'use strict';
module.exports = (sequelize, DataTypes) => {
  const userscrops = sequelize.define('userscrops', {
    userId: DataTypes.INTEGER,
    cropId: DataTypes.INTEGER
  }, {});
  userscrops.associate = function(models) {
    // associations can be defined here
  };
  return userscrops;
};