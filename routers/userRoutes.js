const { Router } = require("express");
const controller = require("../controller/controller");
const router = Router();

router.post("/", controller.saveUser);
router.get("/", controller.getUser);
router.post("/:userId/cart", controller.createCart);

module.exports = router;
