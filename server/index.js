import https from "https";
import http from "http";
import fs from "fs";
import app from "./app.js";

try {
  http.createServer(app).listen(process.env.HTTP_PORT, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(
      `http server has been started on ${process.env.HTTP_PORT} port`
    );
  });
} catch (err) {
  console.log(err);
}

try {
  const httpsServerOptions = {
    cert: fs.readFileSync(`${process.env.PATH2SSL}/fullchain.pem`),
    key: fs.readFileSync(`${process.env.PATH2SSL}.online/privkey.pem`)
  };

  https
    .createServer(httpsServerOptions, app)
    .listen(process.env.HTTPS_PORT, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(
        `https server has been started on ${process.env.HTTPS_PORT} port`
      );
    });
} catch (err) {
  console.log(err);
}
