const { User, Cart, CartItem, Product } = require("../models");

const saveUser = async (req, res) => {
  try {
    const ifExist = User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (ifExist) {
      res.status(200).json({ message: "Email Is Already Registered" });
    } else {
      const user = await User.create(req.body);
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getUser = async (_req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const saveProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getProduct = async (_req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createCart = async (req, res) => {
  try {
    const cart = await Cart.create({ userId: req.params.userId });
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const cartItem = await CartItem.create({
      cartId: req.params.cartId,
      productId: req.body.productId,
      quantity: req.body.quantity,
    });
    res.status(200).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getProductFromCart = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({
      where: { cartId: req.params.cartId },
      include: Product,
    });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateProductQuantity = async (req, res) => {
  try {
    const cartItem = await CartItem.findOne({
      where: {
        cartId: req.params.cartId,
        productId: req.params.productId,
      },
    });

    if (cartItem) {
      cartItem.quantity = req.body.quantity;
      // const cartItem.quantity = req.body.quantity
      console.log("Hellooooooooooooooooooooooo");
      await cartItem.save();
      res.status(200).json(cartItem);
    } else {
      console.log("Item not found with matching details");
    }
    // res.status(200).json(cartItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteProductFromCart = async (req, res) => {
  try {
    const cartItem = await CartItem.findOne({
      where: {
        cartId: req.params.cartId,
        productId: req.params.productId,
      },
    });
    if (cartItem) {
      await cartItem.destroy();
      res.status(200).send("Item Removed from Cart");
    } else {
      res.status(400).send("Item Does not Exist in cart");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
