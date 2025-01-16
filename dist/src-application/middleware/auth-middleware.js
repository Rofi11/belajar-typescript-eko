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
exports.authMiddleware = void 0;
const database_1 = require("../application/database");
// 109 - middleware untuk ambil data yang sudah login
const authMiddleware = (req, // diubah menjadi buatan sendiri, tapi extend dari request espress, utk menambahkan user
res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // take token
    const token = req.get("X-API-TOKEN");
    //cek token
    if (token) {
        // ambil data dari database
        const user = yield database_1.prismaClient.user.findFirst({
            where: {
                token: token,
            },
        });
        if (user) {
            req.user = user; // 109 - error karena di request bawwan express tidak ada property user, maka kita harus tambahkan, perlu ubah type data nya (buat manual)
            next();
            return;
        }
    }
    // jika error
    res
        .status(401)
        .json({
        errors: "authorized",
    })
        .end();
});
exports.authMiddleware = authMiddleware;
