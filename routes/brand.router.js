const express = require("express");
const {
  getBrandValidator,
  createBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
} = require("../validators/brand.validator");

const {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brand.controller");

const router = express.Router();
/*-----------------------------------------------------------------*/
// Get All Brands
router.get("/", getBrands);
/*-----------------------------------------------------------------*/
// Get Brand by Id
router.get("/:id", getBrandValidator, getBrand);
/*-----------------------------------------------------------------*/
// Create new Brand
router.post("/", createBrandValidator, createBrand);
/*-----------------------------------------------------------------*/
// Update Brand
router.patch("/:id", updateBrandValidator, updateBrand);
/*-----------------------------------------------------------------*/
// Delete Brand by Id
router.delete("/:id", deleteBrandValidator, deleteBrand);
/*-----------------------------------------------------------------*/
module.exports = router;
/*-----------------------------------------------------------------*/
