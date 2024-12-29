// import express from "express";
import express, { Express } from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";

export const web: Express = express(); // Buat instance Express
web.use(express.json()); // Middleware untuk parsing JSON

// registraiskan router
web.use(publicRouter);

// registrasikan error
web.use(errorMiddleware);

// untuk get data yang sudah login
web.use(apiRouter);
