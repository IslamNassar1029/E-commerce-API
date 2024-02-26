const express = require("express");

const {
getOrders,
} = require("../controllers/order.controller");

const {
    getProducts,
} = require("../controllers/product.controller");

const {
    getCategories,
    } = require("../controllers/category.controller");

 const {
     getUsers,
     } = require("../controllers/user.controller");

const router = express.Router();
/*-----------------------------------------------------------------*/

// Get All Orders
router.get("/orders", getOrders);
// Get All products
router.get("/products", getProducts);
// Get All categories
router.get("/categories", getCategories);
// Get All Users
 router.get("/users", getUsers);
/*-----------------------------------------------------------------*/