module.exports = function(sequelize, Sequelize) {
  var Leaflet = sequelize.define("Post", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    summary: {
      type: Sequelize.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  // Leaflet.associate = function(models) {
  //   Leaflet.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Leaflet;
};
