"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
describe("Transform", () => {
    it("should support transform", () => {
        // transform  cocok digunakan jika data yang mau di masukan kedalam databse setelah validasi perlu di rubah
        const schema = zod_1.z
            .string()
            .email()
            .transform((data) => {
            return data.toUpperCase().trim(); // trim menghilangkan spasi dikiri dan dikanan
        });
        const result = schema.parse("eko@example.com");
        console.info(result);
    });
});
