import express from "express";
import userRouter from "../modules/user/user.router.js";
import postRouter from "../modules/post/post.router.js";
import searchRouter from "../modules/search/search.router.js";
import ntfRouter from "../modules/Notification/ntf.Router.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Diahoo server is runing");
});

// user router
router.use(userRouter);
router.use(postRouter);
router.use("/api/v1/search", searchRouter);
router.use("/api/v1/ntf", ntfRouter);

export default router;
