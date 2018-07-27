'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkInsert('burgers', [
      {burger_name: "Big Mac", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Double-Double", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Baconator", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Quarter Pounder w/ Cheese", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Royale w/ Cheese", devoured: false, createdAt: new Date(), updatedAt: new Date()},
      {burger_name: "Original Half-Pound Guacamole Bacon Burger", devoured: false, createdAt: new Date(), updatedAt: new Date()}
    ], {});
    /*
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('burgers', null, {truncate : true});
  }
};
