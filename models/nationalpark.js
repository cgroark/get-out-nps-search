'use strict';
module.exports = (sequelize, DataTypes) => {
  var nationalpark = sequelize.define('nationalpark', {
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    Latlong: DataTypes.STRING,
    designation: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.nationalpark.belongsTo(models.user)// associations can be defined here
      }
    }
  });
  return nationalpark;
};