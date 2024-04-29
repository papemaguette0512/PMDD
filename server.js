const express = require("express");

const app = express();

const logger = require("morgan");

const PORT = process.env.PORT || 4002;

const db = require("./models");

require("./routes/movie.routes")(app);

db.mongoose
  .connect(db.url)
  .then(() => {
    console.log(`Connected to the database '${db.url}' !`);
  })
  .catch(err => {
    console.log(`Cannot connect to the database '${db.url}' !`, err);
    process.exit();
  });

app.use(logger("dev"));

app.get("/", (req, res) => {
  console.log(`request from ${req.url}`);
  res.send("Server running");
});
app.get("/movies", (req, res) => {
  res.status(200).json(data);
});
app.get("/movies/:id", (req, res) => {
  const id_movie = parseInt(req.params.id);
  const movie = data.find(m => m.id === id_movie);
  res.status(200).json(movie);

});
app.post("/movie", (req, res) => {
  data.push(req.body);
  res.status(200).json(data);
});
app.listen(PORT, () => {
  console.log(`Backend express server is running on port ${PORT}.`);
});
