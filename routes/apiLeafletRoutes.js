var db = require("../models");

module.exports = function(app) {
  // Get all posts
  // app.get("/api/posts", function(req, res) {
  //   db.Leaflet.findAll({}).then(function(dbLeaflet) {
  //     res.json(dbLeaflet);
  //   });
  // });

  // Create a new post
  app.post("/api/posts", function(req, res) {
    db.Leaflet.create(req.body).then(function(dbLeaflet) {
      res.json(dbLeaflet);
    });
  });

  // Delete an post by id
  app.delete("/api/posts/:id", function(req, res) {
    db.Leaflet.destroy({ where: { id: req.params.id } }).then(function(
      dbLeaflet
    ) {
      res.json(dbLeaflet);
    });
  });

  // search post by id
  app.get("/api/posts/:id", function(req, res) {
    db.Leaflet.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbLeaflet) {
      console.log(dbLeaflet);
      res.json(dbLeaflet);
    });
  });

  //search post by category
  app.get("/api/posts/:category", function(req, res) {
    db.Leaflet.findOne({
      where: {
        category: req.params.category
      }
    }).then(function(dbLeaflet) {
      console.log(dbLeaflet);
      res.json(dbLeaflet);
    });
  });
};
