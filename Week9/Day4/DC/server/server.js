const express = require("express");
const cors = require("cors");
const  prouter  = require("./routes/products.router.js");


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

app.use("/", prouter);

