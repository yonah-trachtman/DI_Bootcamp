const { db } = require("../config/db.js");

const _getAllProducts = () => {
  return db("items").select("item_id", "item_name", "item_price").orderBy("item_id");
};

const _getOneProduct = (product_item_id) => {
  return db("items")
  .select("item_id", "item_name", "item_price")
  .where({ item_id: product_item_id });
};

const _insertProduct = (item_name,item_price) => {
  return db('items').insert({item_name,item_price},["item_id","item_name","item_price"])
}

module.exports = {
  _getAllProducts,
  _getOneProduct,
  _insertProduct
};
