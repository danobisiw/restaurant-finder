const { Schema, model } = require("mongoose");

const menuSchema = new Schema(
  {
    menuUrl: {
      type: String,
    },
    menuName: {
      type: String,
    },
    Shop: [{ type: Schema.Types.ObjectId, ref: "Shop" }],

    ratings: [{ type: Schema.Types.ObjectId, ref: "Shop" }],
    menuDescription: {
      type: String,
    },
    price: {
      type: String,
    },
    orderCategory: [{ type: Schema.Types.ObjectId, ref: "Orders" }],
  },
  {
    timestamps: true,
  }
);

const Shop = model.Menu || model("Menu", menuSchema);
export default Menu;
