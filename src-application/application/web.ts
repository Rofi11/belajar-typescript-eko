// import express from "express";
import express, { Express } from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";

export const web: Express = express(); // Buat instance Express
web.use(express.json()); // Middleware untuk parsing JSON

// registraiskan router
web.use(publicRouter);

// untuk get data yang sudah login
web.use(apiRouter);

// registrasikan error
// harus selalu di akhir atau akan terjadi error di error handling nya tidak bisa menangkap error dengan benar
web.use(errorMiddleware);
