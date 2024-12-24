import { PrismaClient } from "@prisma/client";
import { logger } from "./logging";

export const prismaClient = new PrismaClient({
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
prismaClient.$on("error", (e) => {
  logger.error(e);
});

prismaClient.$on("warn", (e) => {
  logger.error(e);
});

prismaClient.$on("info", (e) => {
  logger.error(e);
});

prismaClient.$on("query", (e) => {
  logger.error(e);
});
