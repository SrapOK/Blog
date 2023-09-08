import { Router } from "express";

import * as commentController from "../controllers/commentController.js";
import checkAuth from "../utils/checkAuth.js";

const router = new Router();

router.get("/post/:id", commentController.getCommentsByPostId);
router.get("/user/:id", commentController.getCommentsByUserId);
router.get("/:id", commentController.getOne);
router.get("/", commentController.getAll);

router.post("/:id", checkAuth, commentController.create);

router.patch("/:id", checkAuth, commentController.update);

router.delete("/:id", checkAuth, commentController.removeOne);

export default router;
