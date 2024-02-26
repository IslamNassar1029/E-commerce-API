const express = require("express");
const {
getOrderValidator,
createOrderValidator,
updateOrderValidator,
deleteOrderValidator,
} = require("../validators/order.validator");

const {
getOrder,
createOrder,
updateOrder,
deleteOrder,
getOrders,
} = require("../controllers/order.controller");

const router = express.Router();
/*-----------------------------------------------------------------*/

// Get All Orders
router.get("/", getOrders);
/*-----------------------------------------------------------------*/
// Get Order by Id
router.get("/:id", getOrderValidator, getOrder);
/*-----------------------------------------------------------------*/
// Create new Order
router.post("/", createOrderValidator, createOrder);
/*-----------------------------------------------------------------*/
// Update Order
router.patch("/:id", updateOrderValidator, updateOrder);
/*-----------------------------------------------------------------*/
// Delete Order by Id
router.delete("/:id", deleteOrderValidator, deleteOrder);
/*-----------------------------------------------------------------*/
module.exports = router;
/*-----------------------------------------------------------------*/
