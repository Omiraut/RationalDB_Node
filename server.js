const express = require("express");
const app = express();
const db = require("./models");
port = 3001;
const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productRoutes");
const cartRoutes = require("./routers/cartRoutes");
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("OK");
});

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

db.sequelize.sync().then((_req) => {
  // { force: true }
  app.listen(port, () => {
    console.log("server Running on port no :", port);
  });
});
