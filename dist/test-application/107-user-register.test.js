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
describe("POST /api/users", () => {
    // unutk tiger delete
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.delete();
    }));
    // untuk yang error
    it("should reject register new user if request is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        // 1.tampung data
        const response = yield (0, supertest_1.default)(web_1.web).post("/api/users").send({
            username: "",
            password: "",
            name: "",
        });
        // 2. logger
        logging_1.logger.debug(response.body);
        // 3.unit test
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
        // expect(response.body.message).toBe("Invalid input");
    }));
    // untuk yang berhasil
    it("should register new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web).post("/api/users").send({
            username: "test",
            password: "test",
            name: "test",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.username).toBe("test");
        expect(response.body.data.name).toBe("test");
    }));
});
