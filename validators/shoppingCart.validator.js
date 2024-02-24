const { check } = require("express-validator");
const validatorMiddleware = require("../middlewares/validatorMiddleware");
// const User = require("../models/user.model"); 
const Product = require("../models/product.model"); 

const addToCartValidator = [
    check("user")
      .notEmpty()
      .withMessage("User ID is required")
      .isMongoId()
      .withMessage("Invalid User ID format")
      .custom((value) => {
        return User.findById(value).then((user) => {
          if (!user) {
            return Promise.reject("User not found");
          }
        });
      }),
    check("product")
      .notEmpty()
      .withMessage("Cart Item ID is required")
      .isMongoId()
      .withMessage("Invalid Cart Item ID format")
      ,
    check("quantity")
      .optional()
      .isInt({ min: 1 })
      .withMessage("Quantity must be at least 1"),
    validatorMiddleware,
  ];

const updateCartItemValidator = [
  check("user")
    .notEmpty()
    .withMessage("User ID is required")
    .isMongoId()
    .withMessage("Invalid User ID format")
    .custom((value) => {
      return User.findById(value).then((user) => {
        if (!user) {
          return Promise.reject("User not found");
        }
      });
    }),
  check("product")
    .notEmpty()
    .withMessage("Cart Item ID is required")
    .isMongoId()
    .withMessage("Invalid Cart Item ID format")
    ,
  check("quantity")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),
  validatorMiddleware,
];

const removeFromCartValidator = [
  check("id")
    .notEmpty()
    .withMessage("User ID is required")
    .isMongoId()
    .withMessage("Invalid User ID format")
    .custom((value) => {
      return User.findById(value).then((user) => {
        if (!user) {
          return Promise.reject("User not found");
        }
      });
    }),
  validatorMiddleware,
];


module.exports = {
  addToCartValidator,
  updateCartItemValidator,
  removeFromCartValidator,
  clearCartValidator,
};
