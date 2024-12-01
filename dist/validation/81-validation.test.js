// import library
import { z } from "zod";
describe("validation zod", () => {
    it("should support validation", () => {
        // membuat schema (rule)
        const schema = z.string().min(3).max(100);
        // console.info("data schema", z);
        const request = "eko";
        // call pengecekan menggunakan parse
        const result = schema.parse(request);
        console.info("data result", result);
        expect(result).toBe(request);
    });
    it("should support validate primitive data type", () => {
        const usernameSchema = z.string().email();
        const isAdminSchema = z.boolean();
        const priceSchema = z.number().min(1000).max(1000000);
        const username = usernameSchema.parse("eko@test.com");
        console.info(username);
        const isAdmin = isAdminSchema.parse(true);
        console.info(isAdmin);
        const price = priceSchema.parse(10000);
        console.info(price);
    });
});
