const service = require("../services/service");

const saveUser = (req, res) => {
  try {
    service.saveUser(req, res);
  } catch (error) {
    console.log(error);
  }
};
const getUser = (req, res) => {
  try {
    service.getUser(req, res);
  } catch (error) {
    console.log(error);
  }
};
const saveProduct = (req, res) => {
  try {
    service.saveProduct(req, res);
  } catch (error) {
    console.log(error);
  }
};
const getProduct = (req, res) => {
  try {
    service.getProduct(req, res);
  } catch (error) {
    console.log(error);
  }
};
const createCart = (req, res) => {
  try {
    service.createCart(req, res);
  } catch (error) {
    console.log(error);
  }
};
const addProductToCart = (req, res) => {
  try {
    service.addProductToCart(req, res);
  } catch (error) {
    console.log(error);
  }
};
const getProductFromCart = (req, res) => {
  try {
    service.getProductFromCart(req, res);
  } catch (error) {
    console.log(error);
  }
};
const updateProductQuantity = (req, res) => {
  try {
    service.updateProductQuantity(req, res);
  } catch (error) {
    console.log(error);
  }
};
const deleteProductFromCart = (req, res) => {
  try {
    service.deleteProductFromCart(req, res);
  } catch (error) {}
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
