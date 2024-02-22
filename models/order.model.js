const mongoose = require("mongoose");
/*-----------------------------------------------------------------*/
//to be removed
const userToBeRemovedSchema = new mongoose.Schema({
    name: String,
    price: Number,
  });
const UserToBeRemoved = mongoose.model('UserToBeRemoved', userToBeRemovedSchema);
//end
//products in the order schema
const productsIntheOrderSchema = new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
  });

//
const orderSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'UserToBeRemoved',
        required:[true, "User that placed the order is required"],
    },
    products:[productsIntheOrderSchema],
    totalPrice: {
        type: Number,
        required: true
      },
    status: {
        type: String,
        enum: ['placed', 'shipped', 'delivered', 'cancelled'],
        default: 'placed'
      },
    },
    { timestamps: true }
)
/*-----------------------------------------------------------------*/
// Mongoose query middleware
orderSchema.pre(/^find/, function (next) {
    this.populate();
    next();
  });
  /*-----------------------------------------------------------------*/
// Class Product
const OrderModel = mongoose.model("Order", orderSchema);
/*-----------------------------------------------------------------*/
module.exports = OrderModel;
/*-----------------------------------------------------------------*/
