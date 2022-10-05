const { Schema, model } = require("mongoose");

const ordersSchema = new Schema(
  {
    orderCategory: [eatin, delivery, pickup],

    servedBy: {
      type: String,
    },
    client: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    shopName: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
    orderStatus: [served, delayed, processing],
    orderTotal: {
      type: Number,
    },
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
    additionalRequest: {
      type: String,
    },
    deliveryPoint: {
      type: [delivery, frontDesk, table],
    },
    quantity: {
      type: String,
    },
    additionalRequest: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Shop = models.Orders || model("Orders", ordersSchema);
export default Orders;
