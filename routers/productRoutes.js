const { Router } = require("express");
const controller = require("../controller/controller");
const router = Router();
router.post("/", controller.saveProduct);
router.get("/", controller.getProduct);
module.exports = router;
