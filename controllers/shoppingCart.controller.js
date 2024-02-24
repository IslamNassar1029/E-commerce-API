const factory = require("../factory/factory");
const ShoppingCart = require("../models/shoppingCart.model");

const getCategories = factory.getAll(Category);
/*-----------------------------------------------------------------*/

const getCategory = factory.getOne(Category);
/*-----------------------------------------------------------------*/

const createCategory = factory.createOne(Category);
/*-----------------------------------------------------------------*/

const updateCategory = factory.updateOne(Category);
/*-----------------------------------------------------------------*/

const deleteCategory = factory.deleteOne(Category);


module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };