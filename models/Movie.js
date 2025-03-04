const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Movie = sequelize.define(
  "Movie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(),
    },
    releaseDate: {
      type: DataTypes.DATE(),
    },
    imageUrl: {
      type: DataTypes.STRING(),
    },
  },
  {
    tableName: "movies",
  }
);

module.exports = Movie;
