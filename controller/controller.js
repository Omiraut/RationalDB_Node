const service = require("../services/service");

const saveUser = (req, res) => {
  service.saveUser(req, res);
};
const getUser = (req, res) => {
  service.getUser(req, res);
};
const saveProduct = (req, res) => {
  service.saveProduct(req, res);
};
const getProduct = (req, res) => {
  service.getProduct(req, res);
};
const createCart = (req, res) => {
  service.createCart(req, res);
};
const addProductToCart = (req, res) => {
  service.addProductToCart(req, res);
};
const getProductFromCart = (req, res) => {
  service.getProductFromCart(req, res);
};
const updateProductQuantity = (req, res) => {
  service.getProductFromCart(req, res);
};
const deleteProductFromCart = (req, res) => {
  service.deleteProductFromCart(req, res);
};
module.exports = {
  addProductToCart,
  saveUser,
  getUser,
  saveProduct,
  getProduct,
  createCart,
  getProductFromCart,
  updateProductQuantity,
  deleteProductFromCart,
};
