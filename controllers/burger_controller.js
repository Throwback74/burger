var path = require("path");
// Requiring our Burger model
var db = require("../models");
// Routes
module.exports = function(app) {
  // Add code to redirect the root path to the "get all" path
  app.get('/', function(req, res) {
    res.redirect("/api/burgers");
  });
  // Add sequelize code to get all Burgers 
  app.get("/api/burgers/", function(req, res) {
    db.Burger.findAll({})
      .then(function(data) {
        res.render("index", { burgers: data });
      });
  });
  

  // Add sequelize code to create a new burger and reload the page with it added to the list
  app.post("/api/burgers", function(req, res) {
    var burger = req.body;

    db.Burger.create({
      burger_name: burger.name
    }).then(function(results) {
      console.log(results);
      res.redirect("/api/burgers");
    });
  });

  // Add sequelize code to update the devoured value
  app.put("/api/:id", function(req, res) {
    db.Burger.update(
      { devoured: 1 },
      {
      where: {
        id: req.body.id
      }
  }).then(function(data) {
    console.log(data);
    if (data.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).redirect("/api/burgers");
    }
    // res.redirect("/api/burgers");
  });
  });

  // // Add sequelize code to get all Burgers of a specific genre and return them as JSON
  // app.get("/api/genre/:genre", function(req, res) {
  //   db.Burger.findAll({
  //     where: {
  //       genre: req.params.genre
  //     }
  //   }).then(function(data) {
  //     return res.json(data);
  //   });
  // });

  // // Add sequelize code to get all Burgers from a specific author and return them as JSON
  // app.get("/api/author/:author", function(req, res) {
  //   db.Burger.findAll({
  //     where: {
  //       author: req.params.author
  //     }
  //   }).then(function(data) {
  //     return res.json(data);
  //   });
  // });

  // // Add sequelize code to get all "long" Burgers (more than 150 pages) and return them as JSON
  // app.get("/api/burgers/long", function(req, res) {

  //   db.Burger.findAll({
  //     where: {
  //       pages: {[Op.gte]: 150}
  //     }
  //   }).then(function(data) {
  //     return res.json(data);
  //   });
  // });

  // // Add sequelize code to get all "short" Burgers (150 pages or less) and return them as JSON
  // app.get("/api/Burgers/short", function(req, res) {
  //   db.Burger.findAll({
  //     where: {
  //       pages: {[Op.lte]: 149}
  //     }
  //   }).then(function(data) {
  //     return res.json(data);
  //   });
  // });

  // // Add sequelize code to delete a Burger
  // app.post("/api/delete", function(req, res) {
  //   db.Burger.destroy({
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   }).catch(function(err) {
  //     res.json(err);
  //   });
  // });

};
