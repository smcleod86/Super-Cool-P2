'use strict';
module.exports = (sequelize, DataTypes) => {
  const usersfields = sequelize.define('usersfields', {
    userId: DataTypes.INTEGER,
    fieldId: DataTypes.INTEGER
  }, {});
  usersfields.associate = function(models) {
    // associations can be defined here
  };
  return usersfields;
};