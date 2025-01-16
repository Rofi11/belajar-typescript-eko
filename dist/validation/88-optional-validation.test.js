"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
describe("Optional Validation", () => {
    it("should can support optional validation", () => {
        const registerSchema = zod_1.z.object({
            username: zod_1.z.string().email(),
            password: zod_1.z.string().min(6).max(20),
            firstname: zod_1.z.string().min(3).max(100),
            // yang lastname dibuat jadi optional / tidak mandatory, tinngal tambahkan optional()
            lastname: zod_1.z.string().min(3).max(100).optional(),
        });
        const request = {
            username: "eko@example.com",
            password: "123456",
            firstname: "Eko",
        };
        const result = registerSchema.parse(request);
        console.info(result);
    });
});
