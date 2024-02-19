const express = require("express");
const {
  createProductValidator,
  getProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require("../validators/product.validator");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const router = express.Router();
/*-----------------------------------------------------------------*/
// Get All Products
router.get("/", getProducts);
/*-----------------------------------------------------------------*/
// Get Product by Id
router.get("/:id", getProductValidator, getProduct);
/*-----------------------------------------------------------------*/
// Create new Product
router.post("/", createProductValidator, createProduct);
/*-----------------------------------------------------------------*/
// Update Product
router.patch("/:id", updateProductValidator, updateProduct);
/*-----------------------------------------------------------------*/
// Delete Product by Id
router.delete("/:id", deleteProductValidator, deleteProduct);
/*-----------------------------------------------------------------*/
module.exports = router;
/*-----------------------------------------------------------------*/
