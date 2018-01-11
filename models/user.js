'use strict';
var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,       
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Invalid email; what are you trying to pull?"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 32],
          msg: "Password must be between 6 and 32 characters"
        }
      }
    }
  },
  {
    hooks: {
      beforeCreate: function(pendingUser, options){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash; 
        }
      }
    }
  });
      user.associate = function(models) {
        models.user.hasMany(models.nationalpark);
        // associations can be defined here
  };
  user.prototype.isValidPassword = function(passwordTyped){
  return bcrypt.compareSync(passwordTyped, this.password);
}
//deleting password before it gets password anywhere
user.prototype.toJSON = function (){
  var user = this.get();
  delete user.password;
    return user;
}
  return user;
};
