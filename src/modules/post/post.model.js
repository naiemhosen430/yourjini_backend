import { Schema, model } from "mongoose";

const postscheama = new Schema(
  {
    itemname: {
      required: true,
      type: "string",
      default: "",
    },
    color: {
      required: true,
      type: "string",
      default: "",
    },
    size: {
      required: true,
      type: "string",
      default: "",
    },
    tags: {
      required: true,
      type: "string",
      default: "no set",
    },
    deliverystatus: {
      required: true,
      type: "string",
      default: "no set",
    },
    description: {
      required: true,
      type: "string",
      default: "no set",
    },
    price: {
      required: true,
      type: "Number",
      default: 0,
    },
    oldprice: {
      required: true,
      type: "Number",
      default: 0,
    },
    like: {
      required: true,
      type: "Array",
      default: [],
    },
    comment: {
      required: true,
      type: "Array",
      default: [],
    },
    image: {
      required: true,
      type: "Array",
      default: [],
    },
    type: {
      required: true,
      type: "String",
      default: "post",
      enum: ["post", "blog", "sv"],
    },
    ratting: {
      required: true,
      type: "Number",
      default: 0,
    },
    buyby: {
      required: true,
      type: "Array",
      default: [],
    },
    sell: {
      required: true,
      type: "Number",
      default: 0,
    },
    offer: {
      required: true,
      type: "String",
      default: "no offer",
    },
    oplicy: {
      required: true,
      type: "String",
      default: "no offer",
    },
    review: {
      required: true,
      type: "Number",
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const postmodel = new model("post", postscheama);
export default postmodel;
