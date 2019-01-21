const express = require("express");
const server = express();
const cards = require("./cards.json");
const campaigns = require("./campaigns.json");
const cors = require("cors");
const bodyParser = require("body-parser");

server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send("=== api is running ====");
});
server.get("/cards", (rq, res) => {
  res.json({ cards: cards });
});

server.get("/campaigns", (rq, res) => {
  res.json({ campaigns: campaigns });
});
server.post("/cards/:id", (req, res) => {
  console.log("req ===>", req.params.id);
  console.log("body", req.body);
  const card = cards.filter(e => {
    return e.cardTitle === req.params.id;
  });
  setTimeout(() => {
    card[0].currentWorkflow = req.body.state;
    console.log(card);
  }, 5000);
});

server.listen(4000, () => {
  console.log("=== server is running on port 4000 ====");
});
