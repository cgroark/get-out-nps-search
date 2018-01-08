'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.user.hasMany(models.weather);
        // associations can be defined here
      }
    }
  });
  return user;
};

