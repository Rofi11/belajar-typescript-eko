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
const supertest_1 = __importDefault(require("supertest"));
const web_1 = require("../src-application/application/web");
const logging_1 = require("../src-application/application/logging");
const tes_utils_1 = require("./tes.utils");
const bcrypt_1 = __importDefault(require("bcrypt"));
describe("PATCH /api/users/update", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.create();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.delete();
    }));
    //   jika gagal. tidak sesuai dengan validation ?? ini masih salah zod error nya tidak mengirim data
    it("should reject update user if request is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .patch("/api/users/update")
            .set("X-API-TOKEN", "token")
            .send({
            password: "",
            name: "",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    }));
    //   jika gagal token nya wrong
    it("should reject update user if token is wrong", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .patch("/api/users/update")
            .set("X-API-TOKEN", "salah")
            .send({
            password: "benar",
            name: "benar",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    }));
    // ganti nama
    it("should update user name", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .patch("/api/users/update")
            .set("X-API-TOKEN", "token")
            .send({
            name: "benar",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.name).toBe("benar");
    }));
    //update password dan pengecekan data di database
    it("should reject update password", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .patch("/api/users/update")
            .set("X-API-TOKEN", "token")
            .send({
            password: "benar",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(200);
        const user = yield tes_utils_1.Usertest.get();
        expect(yield bcrypt_1.default.compare("benar", user.password)).toBe(true);
    }));
});
