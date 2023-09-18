import express from "express";

import router from "./routes/index.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
import cors from "cors";
import { CorsOptions } from "./utils/corsOptions.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/uploads", cors(CorsOptions), express.static("uploads"));

app.use("/api", cors(CorsOptions), router);

export default app;
