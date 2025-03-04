const movieRepository = require("../repositories/movieRepository");

const getMovieById = async (id) => {
  return await movieRepository.findMovieById(id);
};

const getMovies = async () => {
  return await movieRepository.findMovies();
};

const saveMovie = async (data) => {
  return await movieRepository.saveMovie(data);
};

const deleteMovie = async (id) => {
  return await movieRepository.deleteMovie(id);
};

const updateMovie = async (id, movieData) => {
  return await movieRepository.updateMovie(id, movieData);
};
module.exports = { getMovieById, getMovies, saveMovie, deleteMovie, updateMovie };
