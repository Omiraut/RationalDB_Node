const express = require("express");
const app = express();
const db = require("./models");
port = 3001;
const userRoutes = require("./routers/userRoutes");
const productRoutes = require("./routers/productRoutes");
const cartRoutes = require("./routers/cartRoutes");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("OK");
});

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

db.sequelize.sync({ force: true }).then((req) => {
  app.listen(port, () => {
    console.log("server Running on port no :", port);
  });
});
