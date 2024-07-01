const { Router } = require("express");
const controller = require("../controller/controller");
const router = Router();
router.post("/:cartId/products", controller.addProductToCart);
router.get("/:cartId/products", controller.getProductFromCart);
router.put("/:cartId/products/:productId", controller.updateProductQuantity);
router.delete("/:cartId/products/:productId", controller.deleteProductFromCart);

module.exports = router;
