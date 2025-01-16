"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
const client_1 = require("@prisma/client");
const logging_1 = require("./logging");
exports.prismaClient = new client_1.PrismaClient({
    // untuk mengirim log
    // ini menggunakan event based logging
    log: [
        {
            emit: "event",
            level: "query",
        },
        {
            emit: "event",
            level: "error",
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "warn",
        },
    ],
});
// ini menambahkan event nya dan menggirim ke file logging.ts
exports.prismaClient.$on("error", (e) => {
    logging_1.logger.error(e);
});
exports.prismaClient.$on("warn", (e) => {
    logging_1.logger.error(e);
});
exports.prismaClient.$on("info", (e) => {
    logging_1.logger.error(e);
});
exports.prismaClient.$on("query", (e) => {
    logging_1.logger.error(e);
});
