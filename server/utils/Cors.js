export const CorsMiddleware = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", [process.env.ALLOW_ORIGIN]);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  return next();
};
