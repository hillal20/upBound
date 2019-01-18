const express = require("express");
const server = express();
const cards = require("./cards.json");
const campaigns = require("./campaigns.json");
const cors = require("cors");

server.use(cors());

server.get("/", (req, res) => {
  res.send("=== api is running ====");
});
server.get("/cards", (rq, res) => {
  res.json({ cards: cards });
});

server.get("/campaigns", (rq, res) => {
  res.json({ campaigns: campaigns });
});

server.listen(4000, () => {
  console.log("server is running on port 4000 ");
});
