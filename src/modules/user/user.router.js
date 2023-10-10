import express from "express";
import {
  createUserController,
  loginUserController,
} from "./user.controler.js";

const userRouter = express.Router();

userRouter.route("/register").post(createUserController);

userRouter.route("/login").post(loginUserController);

export default userRouter;
