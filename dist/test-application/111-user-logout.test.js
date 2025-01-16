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
describe("DELETE /api/users/logout", () => {
    // 1.create data dulu pakai tes.utils
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.create();
    }));
    // 2. delete data username test
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.delete();
    }));
    it("should be able to logout", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .delete("/api/users/logout")
            .set("X-API-TOKEN", "token");
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data).toBe("Data Sudah Terdelete");
        const user = yield tes_utils_1.Usertest.get();
        expect(user.token).toBeNull();
    }));
    it("should reject logout user if token is wrong", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .delete("/api/users/logout")
            .set("X-API-TOKEN", "salah");
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(401);
        expect(response.body.errors).toBeDefined();
    }));
});
