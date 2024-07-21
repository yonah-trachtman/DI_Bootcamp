
const express = require("express");
const { emojis } = require("./config/emojis");

const app = express();

app.listen(5000, () => {
  console.log("run on 5000");
});

app.use("/", express.static(`${__dirname}/public`));

app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];

  res.json({ randomEmoji });
});