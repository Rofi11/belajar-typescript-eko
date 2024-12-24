// import express from "express";
import express, { Express } from "express";

export const web: Express = express(); // Buat instance Express
web.use(express.json()); // Middleware untuk parsing JSON
