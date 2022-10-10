const { Schema, model, models } = require("mongoose");

const ordersSchema = new Schema(
  {
    orderCategory: {
      type:String
    },

    servedBy: {
      type: String,
    },
    client: { type: Schema.Types.ObjectId, ref: "Users" },
    shopName: { type: Schema.Types.ObjectId, ref: "Shop" },
    orderStatus: [],

    clientTelephoneNumber: {
      type: String,
    },
    itemPrice: {
      type: { type: Schema.Types.ObjectId, ref: "Menu" },
    },
    // orderReadyBy:{
    //   type:String,
    // },
    orderNumber: 
     { type: Schema.Types.ObjectId, ref: "Menu" },
    
    deliveryPoint: {
      type: String,
    },
    status: {
      type: String,
      
    },
    payMethod: {
      type: String,
    },
    additionalRequest: {
      type:String,
    
    }, 
  },
  {
    timestamps: true,
  }
)


const Orders = models.Orders || model("Orders", ordersSchema);
export default Orders;
 