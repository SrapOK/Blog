import { Router } from "express";
const router = new Router();

import userRouter from "./userRouter.js";
import postRouter from "./postRouter.js";

router.use("/user", userRouter);
router.use("/posts", postRouter);

export default router;
