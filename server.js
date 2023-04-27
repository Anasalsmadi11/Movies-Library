"use strict";
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
const movieData = require("./Movie Data/data.json");

let movies = [];
function Movie(title, path, overview) {
  this.title = title;
  this.path = path;
  this.overview = overview;
  movies.push(this);
}

app.get("/", (req, res) => {
  // res.json(`welcome to my first server`)
  movieData.data.map((el) => {
    new Movie(el.title, el.poster_path, el.overview);
  });
  res.json(movies)
});

app.get("/favorite", favorite);
function favorite(req, res) {
  res.json(`Welcome to Favorite Page
    `);
}

// app.use((req, res, next) => {
//     res.status(404).send('Sorry, the requested resource was not found');
//   });
// app.use(notFoundHandle);
// function notFoundHandle(req, res) {
//   res.status(500).send({status:500,responseText:"the pageis not found"});
// }
// app.use(notFoundHandler);
// function notFoundHandler(req, res) {
//   res.status(404).send({status:404,responseText:"the pageis not found"});
// }



app.listen(port, () => {
  console.log(`this server listen on port ${port}`);
});
