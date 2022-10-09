const { Schema, model, models } = require("mongoose");

const shopSchema = new Schema(
  {
    shopName: {
      type: String,
      required: "",
    },
    location: {
      type: String,
      required: true,
    },
    streetName: {
      type: String,
    },
    serviceType: [],
    email: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    contactManager: {
      type: String,
    },
   
    region: [],
    tin: {
      type: String,
  
    },
    gpsCode:{
      type:String,
    }
    
  },
  {
    timestamps: true,
  }
);
const Shop=models.Shop||model("Shop", shopSchema)
export default Shop
