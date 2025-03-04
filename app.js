const express = require("express");
const userRouter = require("./routes/userRouter");
const movieRouter = require("./routes/movieRouter");

const app = express();
app.use(express.json());

app.use("/auth", userRouter);
app.use("/movies", movieRouter);

app.listen(3001, () => console.log("server start"));
