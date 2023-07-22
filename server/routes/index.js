import { Router } from "express";
const router = new Router();

import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";
import uploadRouter from "./uploadRouter.js";

router.use("/uploads", uploadRouter);
router.use("/user", userRouter);
router.use("/posts", postRouter);

export default router;
