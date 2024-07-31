const {
  _getAllProducts,
  _getOneProduct,
  _insertProduct,
} = require("../models/products.model.js");

const getAllProduct = (req, res) => {
  _getAllProducts()
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const getOneProduct = (req, res) => {
  const { id } = req.params;
  _getOneProduct(id)
    .then((result) => {
      res.json(result);
    })
    .catch((e) => {
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

const insertProduct = (req, res) => {
  const { item_name, item_price } = req.body;
  _insertProduct(item_name, item_price)
    .then((result) => {
      // res.json(result);
      getAllProduct(req,res)
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ message: "something went wrong!!!" });
    });
};

module.exports = {
  getAllProduct,
  getOneProduct,
  insertProduct
};
