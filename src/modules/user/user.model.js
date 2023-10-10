import { Schema, model } from "mongoose";
import validator from "validator";

const userSchema = new Schema(
  {
    fullname: {
      type: "String",
      required: "false",
      validate: [
        {
          validator: (value) => validator.isLength(value, { min: 3, max: 50 }),
          message: "Name must be between 3 and 50 characters.",
        },
      ],
      default: "",
    },
    profilephoto: {
      type: "String",
      required: true,
      default: "default.jpeg",
    },
    age: {
      type: "Number",
      required: true,
      min: 12,
      max: 100,
      default: 12,
    },
    gender: {
      type: "String",
      required: true,
      enum: ["male", "female", "not set"],
      default: "not set",
    },
    addresss: {
      type: "string",
      required: true,
      default: "not set",
    },
    online_status: {
      type: "number",
    },
    email: {
      type: "String",
      required: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Invalid email format.",
      },
    },
    password: {
      type: "String",
      required: true,
    },
    verificationCode: {
      type: "Number",
    },
    role: {
      type: "String",
      default: "user"
    },
    relationshipstatus: {
      type: "string",
      required: true,
      minLength: 0,
      maxLength: 50,
      default: "Single",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("user", userSchema);
export default UserModel;
