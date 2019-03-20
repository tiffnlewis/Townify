var db = require("../models");
var passwordValidator = require("password-validator");

// Create a schema
var passwordSchema = new passwordValidator();
var userNameSchema = new passwordValidator();

// Add properties to it
passwordSchema
  .is()
  .min(5)
  .has()
  .digits()
  .has()
  .not()
  .spaces();
userNameSchema
  .is()
  .min(4)
  .has()
  .not()
  .spaces()
  .has()
  .not()
  .symbols();

module.exports = function(app) {
  app.post("/api/post", function(req, res) {
    console.log(req.body);
    res.json("test");
  });
  //create user
  app.post("/api/createUser", function(req, res) {
    user = req.body;
    db.User.findOne({
      where: { email: user.email }
    }).then(results => {
      if (results === null) {
        db.User.findOne({
          where: { username: user.username }
        }).then(results => {
          if (results === null) {
            if (
              passwordSchema.validate(user.password) === true &&
              userNameSchema.validate(user.username) === true
            ) {
              db.User.create(user).then(results => {
                res.json(results);
              });
            } else {
              console.log("failed: 'Bad username or password'");
              res.json({
                failed: "Bad username or password"
              });
            }
          } else {
            console.log("failed: 'Username already exists'");
            res.json({
              failed: "Username already exists"
            });
          }
        });
      } else {
        console.log("failed: 'Email already exists'");
        res.json({
          failed: "Email already exists"
        });
      }
    });
  });

  app.post("/api/login", function(req, res) {
    userInfo = req.body;
    db.User.findOne({
      where: {
        username: userInfo.username,
        password: userInfo.password
      }
    }).then(results => {
      if (results) {
        authToken = authGen(50);
        db.User.update(
          {
            authToken: authToken
          },
          {
            where: { id: results.id }
          }
        ).then(() => {
          toLocalStorage = {
            authToken: authToken,
            username: userInfo.username
          };
          res.json(toLocalStorage);
        });
      } else {
        res.json({
          userExists: false
        });
      }
    });
  });

  // app.post("/api/posts", function(req, res) {
  //   db.User.create(req.body).then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // });

  function authGen(length) {
    authToken = [];
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length + 1; i++) {
      authToken.push(
        possible.charAt(Math.floor(Math.random() * possible.length))
      );
    }
    return authToken.join("");
  }
};
