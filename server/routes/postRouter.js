import { Router } from "express";

import * as postController from "../controllers/postController.js";
import checkAuth from "../utils/checkAuth.js";

const router = new Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.post("/create", checkAuth, postController.create);
router.delete("/", postController.remove);
// router.patch('/', postController.update)

export default router;
