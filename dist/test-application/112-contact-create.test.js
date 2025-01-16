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
const tes_utils_1 = require("./tes.utils");
const web_1 = require("../src-application/application/web");
const logging_1 = require("../src-application/application/logging");
describe("POST /api/contacts", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.create();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.ContactTest.deleteAll();
        yield tes_utils_1.Usertest.delete();
    }));
    it("should create new contact", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .post("/api/contacts")
            .set("X-API-TOKEN", "token")
            .send({
            first_name: "eko",
            last_name: "khanedy",
            email: "eko@example.com",
            phone: "0899999",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.first_name).toBe("eko");
        expect(response.body.data.last_name).toBe("khanedy");
        expect(response.body.data.email).toBe("eko@example.com");
        expect(response.body.data.phone).toBe("0899999");
    }));
    it("should reject create new contact if data is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(web_1.web)
            .post("/api/contacts")
            .set("X-API-TOKEN", "token")
            .send({
            first_name: "",
            last_name: "",
            email: "eko",
            phone: "08999990899999089999908999990899999",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    }));
});
