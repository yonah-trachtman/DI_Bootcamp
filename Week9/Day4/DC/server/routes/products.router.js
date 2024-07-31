const {
  getAllProduct,
  getOneProduct,
  insertProduct,
} = require("../controllers/products.controller.js");
const express = require("express");

const router = express.Router();

router.get("/api/hello", (req, res) => {
  res.json({ message: 'Hello From Express' });
});

router.get("/:id", getOneProduct);


router.post("/api/world", (req, res) => {
  const request = req.body
  console.log(req.body.message)
  res.send({
    message: `I received your POST request. This is what you sent me: ${request.message}`
  })  

});

module.exports = router;
