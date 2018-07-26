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

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
