'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("nationalparks", "description", Sequelize.STRING).then(function(){
      return queryInterface.addColumn("nationalparks", "weatherInfo", Sequelize.STRING);
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("nationalparks", "description").then(function(){
      return queryInterface.removeColumn("nationalparks", "weatherInfo");
    });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
