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
describe("POST /api/contacts/:contactId/addresses", () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.Usertest.create();
        yield tes_utils_1.ContactTest.create();
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield tes_utils_1.AddressTest.deleteAll();
        yield tes_utils_1.ContactTest.deleteAll();
        yield tes_utils_1.Usertest.delete();
    }));
    it("should be able to create address", () => __awaiter(void 0, void 0, void 0, function* () {
        // ambil data contact di database
        const contact = yield tes_utils_1.ContactTest.get();
        const response = yield (0, supertest_1.default)(web_1.web)
            .post(`/api/contacts/${contact.id}/addresses`)
            .set("X-API-TOKEN", "token")
            .send({
            street: "Jalan belum ada",
            city: "Jakarta",
            provience: "DKI Jakarta",
            country: "Indonesia",
            postal_code: "12345",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(200);
        expect(response.body.data.id).toBeDefined();
        expect(response.body.data.street).toBe("Jalan belum ada");
        expect(response.body.data.city).toBe("Jakarta");
        expect(response.body.data.provience).toBe("DKI Jakarta");
        expect(response.body.data.country).toBe("Indonesia");
        expect(response.body.data.postal_code).toBe("12345");
    }));
    it("should be reject create new address if request is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        // ambil data contact di database
        const contact = yield tes_utils_1.ContactTest.get();
        const response = yield (0, supertest_1.default)(web_1.web)
            .post(`/api/contacts/${contact.id}/addresses`)
            .set("X-API-TOKEN", "token")
            .send({
            street: "Jalan belum ada",
            city: "Jakarta",
            provience: "DKI Jakarta",
            country: "",
            postal_code: "",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(400);
        expect(response.body.errors).toBeDefined();
    }));
    it("should be reject create new address if contact is not found", () => __awaiter(void 0, void 0, void 0, function* () {
        // ambil data contact di database
        const contact = yield tes_utils_1.ContactTest.get();
        const response = yield (0, supertest_1.default)(web_1.web)
            .post(`/api/contacts/${contact.id + 1}/addresses`)
            .set("X-API-TOKEN", "token")
            .send({
            street: "Jalan belum ada",
            city: "Jakarta",
            provience: "DKI Jakarta",
            country: "Indonesia",
            postal_code: "12345",
        });
        logging_1.logger.debug(response.body);
        expect(response.status).toBe(404);
        expect(response.body.errors).toBeDefined();
    }));
});
