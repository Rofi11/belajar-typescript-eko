"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
describe("Custom Validation", () => {
    // membuat custom validation error didalam transform, dengan menambahkan parameter ke 2
    it("should can create custom validation", () => {
        // membuat schema
        const loginSchema = zod_1.z.object({
            username: zod_1.z
                .string()
                .email()
                .transform((data, ctx) => {
                if (data != data.toUpperCase()) {
                    ctx.addIssue({
                        code: zod_1.z.ZodIssueCode.custom,
                        message: "Username harus Uppercase",
                    });
                    return zod_1.z.NEVER;
                }
                else {
                    return data;
                }
            }),
            password: zod_1.z.string().min(6).max(20),
        });
        // request
        const request = {
            username: "eko@example.com",
            password: "rahasia",
        };
        const result = loginSchema.parse(request);
        console.info(result);
    });
});
