const Movie = require("../models/Movie");
const movieService = require("../services/movieService");

const fetchAllMovies = async (request, response) => {
  const movies = await movieService.getMovies();
  response.status(200).json(movies);
};

const fetchMovie = async (request, response) => {
  const { id } = request.params;
  const movie = await movieService.getMovieById(id);

  response.status(200).json(movie);
};

const createMovie = async (request, response) => {
  const data = request.body;
  console.log(request.body);
  const urlImage = `${request.file.destination}/${request.file.filename}`;
  const result = await movieService.saveMovie({ ...data, imageUrl: urlImage });
  response.status(201).json(result);
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const del = await movieService.deleteMovie(id);
  res.status(200).json(del);
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const movieData = req.body;
  const result = await movieService.updateMovie(id, movieData);
  res.status(200).json({ message: "Modification effectué" });
};

module.exports = { fetchAllMovies, fetchMovie, createMovie, deleteMovie, updateMovie };
