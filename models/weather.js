'use strict';
module.exports = (sequelize, DataTypes) => {
  var weather = sequelize.define('weather', {
    location: DataTypes.STRING,
    maxtemp: DataTypes.INTEGER,
    mintemp: DataTypes.INTEGER,
    rain: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.weather.belongsTo(models.user)
        // associations can be defined here
      }
    }
  });
  return weather;
};

