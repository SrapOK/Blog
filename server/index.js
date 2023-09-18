import https from "https";
import http from "http";
import fs from "fs";
import app from "./app.js";

try {
  http.createServer(app).listen(process.env.PORT, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`http server has been started on ${process.env.PORT} port`);
  });
} catch (err) {
  console.log(err);
}

try {
  const httpsServerOptions = {
    sert: fs.readFileSync(process.env.PATH2SSlSERT),
    key: fs.readFileSync(process.env.PATH2SSLKEY)
  };

  https
    .createServer(httpsServerOptions, app)
    .listen(process.env.PORT + "1", (err) => {
      if (err) {
        return console.log(err);
      }
      console.log(`https server has been started on ${process.env.PORT} port`);
    });
} catch (err) {
  console.log(err);
}
