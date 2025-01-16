"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user-service");
class UserController {
    // REGISTER
    static register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // call data service
            try {
                const request = req.body;
                const response = yield user_service_1.UserService.register(request);
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    // LOGIN
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // call data service
            try {
                const request = req.body;
                const response = yield user_service_1.UserService.login(request);
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    // 109 - Get data yang sudah login
    static getData(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // call data service
            try {
                // get data nya
                const response = yield user_service_1.UserService.get(req.user); // karena type data optional, karena pasti jadi tambah tanda seru!
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    // 110 - Update data
    static updateData(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // call data service
            try {
                const request = req.body;
                const response = yield user_service_1.UserService.update(req.user, request);
                res.status(200).json({
                    data: response,
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
    // 111 - LOGOUT
    static logout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // call data service
            try {
                yield user_service_1.UserService.logout(req.user); // karena type data optional, karena pasti jadi tambah tanda seru!
                res.status(200).json({
                    data: "Data Sudah Terdelete",
                });
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.UserController = UserController;
