// eslint-disable-next-line no-unused-vars
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Leaflet.findAll({}).then(function(leafletResponse){
      let dataForHandlebars = {
        Leaflets: leafletResponse
      }
      console.log(dataForHandlebars);
      res.render("index", dataForHandlebars);
    })

  });

  // Load example page and pass in an example by id
  app.get("/billboard", function(req, res) {
    res.render("billBoard");
    // db.Example.findOne({ where: { id: req.params.id } }).then(function(
    //   dbExample
    // ) {
    //   res.render("example", {
    //     example: dbExample
    //   });
    // });
  });

  app.get("/createAccount", function(req, res) {
    res.render("createAccount");
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/user", function(req, res) {
    res.render("user");
  });

  app.get("/newPost", function(req, res) {
    res.render("newPost");
  });

  app.get("/singlePost", function(req, res) {
    res.render("singlePost");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  app.post("/newPost", function(req, res) {
    res.render("newPost");
  });
};
