"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import library
const zod_1 = require("zod");
describe("validation zod", () => {
    it("should support validation", () => {
        // membuat schema (rule)
        const schema = zod_1.z.string().min(3).max(100);
        // console.info("data schema", z);
        const request = "eko";
        // call pengecekan menggunakan parse
        const result = schema.parse(request);
        console.info("data result", result);
        expect(result).toBe(request);
    });
    it("should support validate primitive data type", () => {
        const usernameSchema = zod_1.z.string().email();
        const isAdminSchema = zod_1.z.boolean();
        const priceSchema = zod_1.z.number().min(1000).max(1000000);
        const username = usernameSchema.parse("eko@test.com");
        console.info(username);
        const isAdmin = isAdminSchema.parse(true);
        console.info(isAdmin);
        const price = priceSchema.parse(10000);
        console.info(price);
    });
});
