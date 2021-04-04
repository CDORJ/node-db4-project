const express = require("express");
const helmet = require("helmet");
const server = express();
const recipesRouter = require("./router.js");

server.use(express.json(), helmet());

server.use("/api/recipebook", recipesRouter);

server.get("/", (req, res, next) => {
  res.status(200).json({ message: "recipes up" });
});

server.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Server failed...";
  res.status(errorStatus).json({ message: errorMessage, stack: error.stack });
});

module.exports = server;
