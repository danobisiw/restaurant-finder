const { Schema, model, models } = require("mongoose");

const shopSchema = new Schema({
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
  contantEmail: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  contactManager: {
    type: String,
  },
  managerContactNumber:{
    type:String,
  },
  region:{
    type:String,
  },
  BusinessRegistrationNumber:{
    type:String,
    required: true,
  }
  
},
{
timestamps:true,
}
);
const Shop=models.Shop||model("Shop", shopSchema)
export default Shop
