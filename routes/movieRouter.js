const express = require("express");
const { fetchAllMovies, fetchMovie, createMovie, deleteMovie, updateMovie } = require("../controllers/movieController");
const multerConfig = require("../middlewares/multer-config");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.get("/", fetchAllMovies);
router.get("/:id", fetchMovie);
router.post("/", checkAuth, multerConfig.single("imageUrl"), createMovie);
router.put("/:id", checkAuth, updateMovie);
router.delete("/:id", checkAuth, deleteMovie);

module.exports = router;
