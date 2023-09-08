import { Router } from "express";
const router = new Router();

import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";
import uploadRouter from "./uploadRouter.js";
import commentRouter from "./commentRouter.js";

router.use("/uploads", uploadRouter);
router.use("/user", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);

export default router;
