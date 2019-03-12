module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: DataTypes.STRING,
    userName: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    userPhone: DataTypes.STRING
  });
  User.associate = function (models) {
    User.hasmany(models.Post, {
      onDelete: "cascade"
    });
  };
  return User;
};

// module.exports = Leaflet;
// Leaflet: function(sequelize, DataTypes) {
//   sequelize.define("Leaflet", {
//     id: DataTypes.STRING,
//     title: DataTypes.STRING,
//     summary: DataTypes.TEXT,
//     time: DataTypes.STRING
//   });
// }