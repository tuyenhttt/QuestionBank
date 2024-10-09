const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getById,
  update,
  deleteProduct,
} = require("../../controllers/api/product.controller");

router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getById), router.put("/:id", update);
router.delete("/:id", deleteProduct);

module.exports = router;
