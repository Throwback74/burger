// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var table = 'burgers';
var burger = {
  selectAll: function(cb) {
    orm.selectAll(table, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(val_1, val_2, cb) {
    orm.create(val_1, val_2, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, id, cb) {
    orm.update(table, objColVals, id, function(res) {
      cb(res);
    });
  }
  // delete: function(deletedburger, cb) {
  //   orm.delete(deletedburger, function(res) {
  //     cb(res);
  //   });
  // }
};
// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

// Create a "Burger" model with the following configuration
var Burger = sequelize.define("book", {
  burger_name: Sequelize.STRING,
  devoured: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
});
// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB
Burger.sync();
// Export the Burger model for other files to use
module.exports = Burger;
// Export the database functions for the controller (burgersController.js).
module.exports = burger;
