"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
// import express from "express";
const express_1 = __importDefault(require("express"));
const public_api_1 = require("../route/public-api");
const error_middleware_1 = require("../middleware/error-middleware");
const api_1 = require("../route/api");
exports.web = (0, express_1.default)(); // Buat instance Express
exports.web.use(express_1.default.json()); // Middleware untuk parsing JSON
// registraiskan router
exports.web.use(public_api_1.publicRouter);
// untuk get data yang sudah login
exports.web.use(api_1.apiRouter);
// registrasikan error
// harus selalu di akhir atau akan terjadi error di error handling nya tidak bisa menangkap error dengan benar
exports.web.use(error_middleware_1.errorMiddleware);
