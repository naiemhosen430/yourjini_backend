import UserModel from "../user/user.model.js";
import {
  createPostService,
  geMyPostService,
  getAllPostService,
} from "./post.service.js";

export const createPostControler = async (req, res) => {
  try {
    const data = await createPostService(req.body);

    res.status(200).json({
      statusCode: 200,
      message: "success",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPostControler = async (req, res) => {
  try {
    const data = await getAllPostService();

    if (!data) {
      return res.status(498).json({
        statusCode: 498,
        message: "Something went wrong",
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: "success",
      total: data.lenghth,
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMyPostControler = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(498).json({
        statusCode: 498,
        message: "Something went wrong",
      });
    }

    const data = await geMyPostService(req);
    if (!data) {
      return res.status(498).json({
        statusCode: 498,
        message: "Something went wrong",
      });
    }

    res.status(200).json({
      statusCode: 200,
      message: "success",
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
