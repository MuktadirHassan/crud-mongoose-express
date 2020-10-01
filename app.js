const express = require("express");
const app = express();
app.use(express.json());


const mongoose = require("mongoose");
require("dotenv/config");

//Import Routes
const postRoute = require("./routes/posts");
app.use("/posts", postRoute);

// Routes
app.get("/", (req, res) => {
  res.send("I am Home.");
});

app.get("/posts", (req, res) => {
  res.send("We are in posts.");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB.")
);

app.listen(3000);
