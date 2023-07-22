import { Router } from "express";

import * as postController from "../controllers/postController.js";
import checkAuth from "../utils/checkAuth.js";
import { postCreateValidation } from "../utils/validations.js";
import handleValidationErrors from "../utils/handleValidationErrors.js";

const router = new Router();

router.get("/", postController.getAll);
router.get("/:id", postController.getOne);
router.post(
  "/",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  postController.create
);
router.delete("/:id", checkAuth, postController.remove);
router.patch(
  "/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  postController.update
);

export default router;
