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
describe("PUT /api/contacts/:contactId", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.create();
        yield tes_utils_1.ContactTest.create();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.ContactTest.deleteAll();
        yield tes_utils_1.Usertest.delete();
    }));
    it("should be able to update contact", () => __awaiter(void 0, void 0, void 0, function* () {
        // ambil data contact di database
        const contact = yield tes_utils_1.ContactTest.get();
        const response = yield (0, supertest_1.default)(web_1.web)
            .put(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "token")
            .send({
            first_name: "eko",
            last_name: "khannedy",
            email: "eko@example.com",
            phone: "9999",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.first_name).toBe("eko");
        expect(response.body.data.last_name).toBe("khannedy");
        expect(response.body.data.email).toBe("eko@example.com");
        expect(response.body.data.phone).toBe("9999");
    }));
    it("should reject update contact if request is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        // ambil data contact di database
        const contact = yield tes_utils_1.ContactTest.get();
        const response = yield (0, supertest_1.default)(web_1.web)
            .put(`/api/contacts/${contact.id}`)
            .set("X-API-TOKEN", "token")
            .send({
            first_name: "",
            last_name: "",
            email: "eko",
            phone: "",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    }));
});
