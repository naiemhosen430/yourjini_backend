import express from "express";
import {
  createPostControler,
  getAllPostControler,
  getMyPostControler,
} from "./post.controler.js";

const postRouter = express.Router();

postRouter.route("/product").get(getAllPostControler);

postRouter.route("/product/:id").get(getMyPostControler);

postRouter.route("/product/create").post(createPostControler);

export default postRouter;
