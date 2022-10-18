const {Schema, model, models} = require("mongoose");

const ordersSchema = new Schema({
    orderCategory: {
        type: String
    },

    servedBy: {
        type: String
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    shopName: {
        type: Schema.Types.ObjectId,
        ref: "Shop"
    },
    orderStatus: [],

    clientTelephoneNumber: {
        type: String
    },
    itemPrice: {
        type: {
            type: Schema.Types.ObjectId,
            ref: "Menu"
        }
    },
    // orderReadyBy:{
    // type:String,
    // },
    orderNumber: {
        type: Schema.Types.ObjectId,
        ref: "Menu"
    },

    deliveryPoint: {
        type: String
    },
    status: {
        type: String
    },
    payMethod: {
        type: String
    },
    additionalRequest: {
        type: Schema.Types.ObjectId,
        ref: "Menu"
    },

    quantity: {
        type: String,
        default: 0
    }
}, {timestamps: true});

const Order = models.Orders || model("Order", ordersSchema);
export default Order;
