const { Schema, model, models } = require("mongoose");

const shopSchema = new Schema(
  {
    shopid: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    shopName: { type: String },
    location: {
      type: String,
      required: true,
    },
    streetName: {
      type: String,
    },
    serviceType: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    contactManager: {
      type: String,
    },
    region: {
      type: String,
      retuired: true,
    },
    tin: {
      type: String,
    },
    gpsCode: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Shop = models.Shop || model("Shop", shopSchema);
export default Shop;
