module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    username: {
      type: Sequelize.TEXT
    },
    about: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastLogin: {
      type: Sequelize.DATE
    },
    userImg: {
      type: Sequelize.STRING,
      defaultValue:
        "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
    },
    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    },
    lemons: {
      type: Sequelize.INTEGER,
      defaultValue: 30
    },
    authToken: {
      type: Sequelize.STRING
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Leaflet, {
      onDelete: "cascade"
    });
  };
  return User;
};
