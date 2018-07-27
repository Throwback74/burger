// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// Dependencies
// =============================================================
var Burger = require("../models/burger.js");
var Sequelize = require("sequelize");
var Op = Sequelize.Op;
// Requiring our Burger model
var db = require("../models");
// Routes
// ==3===========================================================
module.exports = function(app) {
  
  
  // Add sequelize code to get all Burgers and return them as JSON
  app.get("/api/burgers/", function(req, res) {
    db.Post.findAll({})
      .then(function(data) {
        res.json(data);
      });
  });
  app.get("/", function(req, res) {
    Burger.findAll({}).then(function(results) {
      // results are available to us inside the .then
      return res.json(results);
    });
  });

  // Add sequelize code to get a specific Burger and return it as JSON
  app.post("/api/burgers", function(req, res) {
    var burger = req.body;

    Burger.create({
      burger_name: burger.name,
      devoured: true
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add sequelize code to get all Burgers of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    Burger.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to get all Burgers from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    Burger.findAll({
      where: {
        author: req.params.author
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to get all "long" Burgers (more than 150 pages) and return them as JSON
  app.get("/api/burgers/long", function(req, res) {

    Burger.findAll({
      where: {
        pages: {[Op.gte]: 150}
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to get all "short" Burgers (150 pages or less) and return them as JSON
  app.get("/api/Burgers/short", function(req, res) {
    Burger.findAll({
      where: {
        pages: {[Op.lte]: 149}
      }
    }).then(function(data) {
      return res.json(data);
    });
  });

  // Add sequelize code to create a Burger
  app.post("/api/new", function(req, res) {
  // Take the request...
    var Burger = req.body;

    Burger.create({
      title: burger.title,
      author: burger.author,
      genre: burger.genre,
      pages: burger.pages
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add sequelize code to delete a Burger
  app.post("/api/delete", function(req, res) {
    Burger.destroy({
      where: {
        id: req.body.id
      }
    }).then(function(results) {
      res.json(results);
    }).catch(function(err) {
      res.json(err);
    });
  });

};
