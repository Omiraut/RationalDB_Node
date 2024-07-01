"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Cart, {
        through: models.CartItem,
        foreignKey: "productId",
        otherKey: "cartId",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
