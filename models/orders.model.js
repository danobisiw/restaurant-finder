const { Schema, model } = require("mongoose");

const ordersSchema = new Schema(
  {
    orderCategory: [],
 
    servedBy: {
      type: String,
    },
    client: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    shopName: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
    orderStatus: [served, delayed, processing],

    clientTelephoneNumber: {
      type: String,
    },
    itemPrice: {
      type: String,
    },
    // orderReadyBy:{
    //   type:String,
    // },
    orderNumber: {
      type: String,
    },
    deliveryPoint: {
      type: [delivery, frontDesk, table],
    },
    Status: {
      type: Number,
      default: 0,
    },
    payMethod: {
      type: String,
     
    },
    additionalRequest: {
      type: [
        {
          text: { type: String, required: "" },
          price: { type: Number, required: "" },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const orders = models.Orders || model("Orders", ordersSchema);
export default Orders;
 