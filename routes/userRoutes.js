var db = require("../models");

module.exports = function(app) {
  //create
  app.post("/api/createUser", function(req, res) {
    console.log(req.body);
    user = req.body;
    db.User.create(user);
  });
  //login

  //delete
};
