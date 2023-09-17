import express from "express";
import router from "./routes/index.js";
import connectDB from "./db.js";
import dotenv from "dotenv";
import { CorsMiddleware } from "./utils/Cors.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/uploads", express.static("uploads"));

app.use("/", CorsMiddleware);

app.use("/api", router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("OK");
});
