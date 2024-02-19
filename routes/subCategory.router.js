const express = require("express");
const {
  createSubCategory,
  getSubCategory,
  getSubCategories,
  updateSubCategory,
  deleteSubCategory,
  setCategoryIdToBody,
  createFilterObj,
} = require("../controllers/subCategory.controller");

const {
  createSubCategoryValidator,
  getSubCategoryValidator,
  updateSubCategoryValidator,
  deleteSubCategoryValidator,
} = require("../validators/subCategory.validator");

// mergeParams: Allow us to access parameters on other routers
// We need to access categoryId from category route
const router = express.Router({ mergeParams: true });
/*-----------------------------------------------------------------*/
// Get All SubCategories
router.get("/", createFilterObj, getSubCategories);
/*-----------------------------------------------------------------*/
// Get SubCategory by Id
router.get("/:id", getSubCategoryValidator, getSubCategory);
/*-----------------------------------------------------------------*/
// Create new SubCategory
router.post(
  "/",
  setCategoryIdToBody,
  createSubCategoryValidator,
  createSubCategory
);
/*-----------------------------------------------------------------*/
// Update SubCategory
router.patch("/:id", updateSubCategoryValidator, updateSubCategory);
/*-----------------------------------------------------------------*/
// Delete SubCategory by Id
router.delete("/:id", deleteSubCategoryValidator, deleteSubCategory);
/*-----------------------------------------------------------------*/
module.exports = router;
/*-----------------------------------------------------------------*/
