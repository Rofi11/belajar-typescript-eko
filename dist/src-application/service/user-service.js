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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const database_1 = require("../application/database");
const response_error_1 = require("../error/response-error");
const user_model_1 = require("../model/user-model");
const user_validation_1 = require("../validation/user-validation");
const validation_1 = require("../validation/validation");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
// agar lebih rapih kita kan membungkus semua kedalam bentuk class
class UserService {
    // 107 - REGISTER
    static register(request) {
        return __awaiter(this, void 0, void 0, function* () {
            //1.validation data
            const userRegister = validation_1.Validation.validate(user_validation_1.UserValidation.REGISTER, request);
            // 2. mencari semua username dengan count
            const totalUserWithSameUsername = yield database_1.prismaClient.user.count({
                where: {
                    username: userRegister.username,
                },
            });
            // 3.cek username yang sama
            if (totalUserWithSameUsername != 0) {
                throw new response_error_1.ResponseError(400, "username already exist");
            }
            // 4.hashing password
            userRegister.password = yield bcrypt_1.default.hash(userRegister.password, 10);
            // 5.registrasikan kedalam database (simpan)
            const User = yield database_1.prismaClient.user.create({
                data: userRegister,
            });
            //6. konversi dari User ke userResponse, kita return kan data berhasil nya
            return (0, user_model_1.toUserResponse)(User);
        });
    }
    // 108- LOGIN
    static login(request) {
        return __awaiter(this, void 0, void 0, function* () {
            //1.validation data
            const loginRequest = validation_1.Validation.validate(user_validation_1.UserValidation.LOGIN, request);
            //2. cek data user
            let user = yield database_1.prismaClient.user.findUnique({
                where: {
                    username: loginRequest.username,
                },
            });
            //2.1 cek user ada atau tidak
            if (!user) {
                throw new response_error_1.ResponseError(401, "Username or Password is wrong");
            }
            //2.2 cek password (compare password yang di kirim dan di database)
            const isPasswordValid = yield bcrypt_1.default.compare(loginRequest.password, user.password);
            // cek password benar atau tidak
            if (!isPasswordValid) {
                throw new response_error_1.ResponseError(401, "Username or Password is wrong");
            }
            // 2.3 update berdasarkan username, kita mengupdate token nya
            user = yield database_1.prismaClient.user.update({
                where: {
                    username: loginRequest.username,
                },
                data: {
                    token: (0, uuid_1.v4)(),
                },
            });
            // 3. kirim data ke database
            const response = (0, user_model_1.toUserResponse)(user);
            response.token = user.token; //masukan token karena tidak kosong, kita paksa dengan tanda seru
            return response;
        });
    }
    // 109 - GET DATA YANG SUDAH LOGIN
    static get(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, user_model_1.toUserResponse)(user);
        });
    }
    // 110 - UPDATE USER
    static update(user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            // cek data nya
            const updateRequest = validation_1.Validation.validate(user_validation_1.UserValidation.UPDATE, request);
            // cek nama
            if (updateRequest.name) {
                user.name = updateRequest.name;
            }
            //cek password
            if (updateRequest.password) {
                user.password = yield bcrypt_1.default.hash(updateRequest.password, 10);
            }
            // update data di database
            const result = yield database_1.prismaClient.user.update({
                where: {
                    username: user.username,
                },
                data: user,
            });
            return (0, user_model_1.toUserResponse)(result);
        });
    }
    // 111 - LOGOUT
    static logout(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.prismaClient.user.update({
                where: {
                    username: user.username,
                },
                data: {
                    token: null, // kita update token nya menjadi null
                },
            });
            return (0, user_model_1.toUserResponse)(result);
        });
    }
}
exports.UserService = UserService;
