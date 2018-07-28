// var path = require("path");
// var express = require("express");
// var router = express.Router();

// Requiring our Burger model
var db = require("../models");



// Extracts the sequelize connection from the models object
// var sequelizeConnection = db.sequelize;

// // Sync the tables
// sequelizeConnection.sync();
// Routes
module.exports = function(app) {
  // Add code to redirect the root path to the "get all" path
  app.get('/', function(req, res) {
    res.redirect("/api/all");
  });
  // Add sequelize code to get all Burgers 
  app.get("/api/all", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
        res.render("index", { burgers: data });
      });
  });
  
  // Add sequelize code to create a new burger and reload the page with it added to the list
  app.post("/api/burgers", function(req, res) {
    var burger = req.body;

    db.Burger.create({
      burger_name: burger.burger_name
    }).then(function(results) {
      console.log(results);
      res.redirect("/api/all");
    });
  });

  // Add sequelize code to update the devoured value
  app.put("/api/:id", function(req, res) {
    db.Burger.update({ devoured: 1 },
      {
      where: {
        id: req.body.id
      }
  }).then(function(data) {
    console.log(data);
    res.redirect("/api/all");
    });
  });
};
