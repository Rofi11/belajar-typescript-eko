"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
// api untuk yang sudah login
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middleware/auth-middleware");
const user_controller_1 = require("../controller/user-controller");
const contact_controller_1 = require("../controller/contact-controller");
const address_controller_1 = require("../controller/address-controller");
exports.apiRouter = express_1.default.Router();
// 109 - cekin middleware
exports.apiRouter.use(auth_middleware_1.authMiddleware);
// USER API
// 109 - User API
exports.apiRouter.get("/api/users/current", user_controller_1.UserController.getData);
// 110 - Update API
exports.apiRouter.patch("/api/users/update", user_controller_1.UserController.updateData);
/// 111 - logout API
exports.apiRouter.delete("/api/users/logout", user_controller_1.UserController.logout);
// CONTACT API
/// 112 - Create Contact API
exports.apiRouter.post("/api/contacts", contact_controller_1.ContactController.create);
/// 113 - Get Contact API
exports.apiRouter.get("/api/contacts/:contactId(\\d+)", contact_controller_1.ContactController.get); // (\\d+) regex validation utk digit, :contactId = params
// 114 - Update Contact API
exports.apiRouter.put("/api/contacts/:contactId(\\d+)", contact_controller_1.ContactController.update);
// 115 - Remove Contact API
exports.apiRouter.delete("/api/contacts/:contactId(\\d+)", contact_controller_1.ContactController.remove);
// 116 - Search Contact API
exports.apiRouter.get("/api/contacts", contact_controller_1.ContactController.search);
// ADDRESS API
//117 - Create Address API
exports.apiRouter.post("/api/contacts/:contactId(\\d+)/addresses", address_controller_1.AddressController.create);
//118 - Get Address API
exports.apiRouter.get("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", address_controller_1.AddressController.get);
//119 - Update Address API
exports.apiRouter.put("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", address_controller_1.AddressController.update);
//120 - Remove address api
exports.apiRouter.delete("/api/contacts/:contactId(\\d+)/addresses/:addressId(\\d+)", address_controller_1.AddressController.remove);
//121 - List address api
exports.apiRouter.get("/api/contacts/:contactId(\\d+)/addresses", address_controller_1.AddressController.list);
