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
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    gpsCode: {
      type: String,
      required: "",
    },
    orders: [{ type: Schema.Types.ObjectId, ref: "Orders" }],

    userName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
