// api untuk yang sudah login
import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";
import { ContactController } from "../controller/contact-controller";
import { AddressController } from "../controller/address-controller";

export const apiRouter = express.Router();
// 109 - cekin middleware
apiRouter.use(authMiddleware);

// 109 - User API
apiRouter.get("/api/users/current", UserController.getData);
// 110 - Update API
apiRouter.patch("/api/users/update", UserController.updateData);
/// 111 - logput API
apiRouter.delete("/api/users/logout", UserController.logout);
/// 112 - Create Contact API
apiRouter.post("/api/contacts", ContactController.create);
/// 113 - Get Contact API
apiRouter.get("/api/contacts/:contactId(\\d+)", ContactController.get); // (\\d+) regex validation utk digit, :contactId = params
// 114 - Update Contact API
apiRouter.put("/api/contacts/:contactId(\\d+)", ContactController.update);
// 115 - Remove Contact API
apiRouter.delete("/api/contacts/:contactId(\\d+)", ContactController.remove);
// 116 - Search Contact API
apiRouter.get("/api/contacts", ContactController.search);
//117 - Create Address API
apiRouter.post(
  "/api/contacts/:contactId(\\d+)/addresess",
  AddressController.create
);
//118 - Get Address API
apiRouter.get(
  "/api/contacts/:contactId(\\d+)/addresess/:addressId(\\d+)",
  AddressController.get
);
//119 - Update Address API
apiRouter.put(
  "/api/contacts/:contactId(\\d+)/addresess/:addressId(\\d+)",
  AddressController.update
);
