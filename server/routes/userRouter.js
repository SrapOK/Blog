import { Router } from "express";

import { registerValidation, loginValidation } from "../utils/validations.js";
import checkAuth from "../utils/checkAuth.js";
import * as userController from "../controllers/userController.js";

const router = new Router();

router.post("/register", registerValidation, userController.register);
router.post("/login", loginValidation, userController.login);
router.get("/auth", checkAuth, userController.check);

export default router;
