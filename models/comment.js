'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    userId: DataTypes.INTEGER,
    fieldId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  comment.associate = function(models) {
    // associations can be defined here
    models.comment.belongsTo(models.user)
  };
  return comment;
};