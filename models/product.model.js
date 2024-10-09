const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requires: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      requires: true,
      default: 0,
    },
    price: {
      type: Number,
      requires: true,
      default: 0,
    },
    image: {
      type: String,
      requires: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
