const { Schema, model, models } = require("mongoose");

const menuSchema = new Schema(
  {
    menuUrl: {
      type: String,
    },
    menuName: {
      type: String,
    },

    Shop: { type: Schema.Types.ObjectId, ref: "Shop" },

    ratings: { type: Schema.Types.ObjectId, ref: "Shop" },
    menuDescription: {
      type: String,
    },
    price: {
      type: String,
    },
    available: {
      type: String,
    },
    orderCategory: { type: Schema.Types.ObjectId, ref: "Orders" },
  },
  {
    timestamps: true,
  }
);

const Menu = models.Menu || model("Menu", menuSchema);
export default Menu;
