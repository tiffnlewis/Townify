module.exports = function(sequelize, DataTypes) {
  var Leaflet = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  Leaflet.associate = function(models) {
    Leaflet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Leaflet;
};
