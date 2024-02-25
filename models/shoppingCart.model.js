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
        ref:'User',
        required:[true, "User of the shopping cart is required"],
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
    quantity: {
        type: Number,
        required: true,
        default: 1
      }
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
