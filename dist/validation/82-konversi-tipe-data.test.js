"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
describe("Konversi Tipe Data", () => {
    // jika mau ada data conversion otomatis
    it("should support data convertion use coerce", () => {
        // dengan menambahkan coerce kita bisa langsung mengkonversi kedata string, jika user salah memasukan tipe data
        const usernameSchema = zod_1.z.coerce.string().min(3).max(100);
        const isAdminSchema = zod_1.z.coerce.boolean();
        const priceSchema = zod_1.z.coerce.number().min(1000).max(1000000);
        const username = usernameSchema.parse(12345);
        console.info(username);
        const isAdmin = isAdminSchema.parse("true");
        console.info(isAdmin);
        const price = priceSchema.parse("10000");
        console.info(price);
    });
});
