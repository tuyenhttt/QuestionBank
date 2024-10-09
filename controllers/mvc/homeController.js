const mongoose = require("mongoose");
const Product = require("../../models/product.model");

/**
 * GET /
 * HOMNE
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("index", locals);
};
