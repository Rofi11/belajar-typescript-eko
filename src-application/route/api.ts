// api untuk yang sudah login
import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";

export const apiRouter = express.Router();
// 109 - cekin middleware
apiRouter.use(authMiddleware);

// 109 - User API
apiRouter.get("/api/users/current", UserController.getData);
// 110 - Update API
apiRouter.patch("/api/users/update", UserController.updateData);
