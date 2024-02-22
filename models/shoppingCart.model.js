const mongoose = require("mongoose");
/*-----------------------------------------------------------------*/
//to be removed
const userToBeRemovedSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
const UserToBeRemoved = mongoose.model('UserToBeRemoved', userToBeRemovedSchema);
//end
const shoppingCartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserToBeRemoved',
        required:[true, "User of the shopping cart is required"],
    },
    products:[productsIntheOrderSchema]
    },
    { timestamps: true }
)
/*-----------------------------------------------------------------*/
// Mongoose query middleware
shoppingCartSchema.pre(/^find/, function (next) {
    this.populate();
    next();
  });
  /*-----------------------------------------------------------------*/
// Class Product
const ShoppingCartModel = mongoose.model("ShoppingCart", ShoppingCartSchema);
/*-----------------------------------------------------------------*/
module.exports = ShoppingCartModel;
/*-----------------------------------------------------------------*/
