import { Router } from "express";

import { upload, uploadFile } from "../controllers/uploadController.js";
import checkAuth from "../utils/checkAuth.js";

const router = new Router();

router.post("/", checkAuth, upload.single("image"), uploadFile);

export default router;
