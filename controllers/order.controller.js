const factory = require("../factory/factory"); 
const Order = require("../models/order.model");

//------------------------------------------------------------------
const getOrders =factory.getAll(Order);
const getOrder=factory.getOne(Order);
const createOrder=factory.createOne();
const updateOrder=factory.updateOne();
const deleteOrder=factory.deleteOne();

module.exports={
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
};

