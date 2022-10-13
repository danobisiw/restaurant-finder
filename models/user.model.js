const { Schema, model, models } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: "",
    },
    lastName: {
      type: String,
      required: "",
    },
    email: {
      type: String,
      required: false,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    location: {
      type: String,
      required: true,
    },
    gpscode: {
      type: String,
      required: "",
    },
    telephoneNumber: {
      type: String,
      required: true,
    },


    orders: { type: Schema.Types.ObjectId, ref: "Orders" },
  },

  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
