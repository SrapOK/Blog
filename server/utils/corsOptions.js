export const CorsOptions = {
  origin: [
    "https://sviktor.online",
    "https://89.111.131.88",
    "http://localhost",
    "http://localhost:5173"
  ],
  allowedHeaders: ["X-Requested-With", "content-type", "authorization"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204
};
