// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ?";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // delete: function(id, cb) {
  //   console.log(id);
  //   var queryString = "DELETE FROM cats WHERE id = ?";
  //   connection.query(queryString, [id], function(err, result) {
  //     if(err) throw err;
  //     cb(result);
  //   });
  // },
  // INSERT INTO burgers (burger_name, devoured) VALUES ('Guacamole & Bacon', true);
  create: function(val_1, val_2, cb) {
    var query = connection.query(
      "INSERT INTO `burgers` SET ?", [{
        burger_name: val_1
      },{
        devoured: val_2
      }],
      function (err, res) {
        if (err) throw err;
        cb(res);
      }
    );
    },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(objColVals, id, cb) {
    objColVals = objToSql(objColVals);
    console.log(objColVals);
    var query = connection.query(
      "UPDATE `burgers` SET ?? WHERE ?", [objColVals, id],
      function (err, res) {
        if (err) throw err;
        cb(res);
      }
    );
    },
  };    

// Export the orm object for the model (cat.js).
module.exports = orm;