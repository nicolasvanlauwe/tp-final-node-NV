const Movie = require("../models/Movie");

const findMovieById = async (id) => {
  return await Movie.findByPk(id);
};

const findMovies = async () => {
  return await Movie.findAll();
};

const saveMovie = async (data) => {
  return await Movie.create(data);
};

const deleteMovie = async (id) => {
  try {
    return await Movie.destroy({ where: { id: id } });
  } catch (error) {
    throw new Error("Aucun film correspondant");
  }
};

const updateMovie = async (id, movieData) => {
  console.log(movieData);
  console.log(id);
  return await Movie.update(movieData, { where: { id } });
};

module.exports = { findMovieById, findMovies, saveMovie, deleteMovie, updateMovie };
