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
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
describe("Custom Validation Message", () => {
    it("should can validate object with message", () => __awaiter(void 0, void 0, void 0, function* () {
        // membuat schema object dan memasukan custom validation message nya
        const loginSchema = zod_1.z.object({
            username: zod_1.z.string().email("username harus email"),
            password: zod_1.z
                .string()
                .min(6, "password min harus 6 karakter")
                .max(20, "password max harus 20 karakter"),
        });
        const request = {
            username: "eko",
            password: "123",
        };
        try {
            const result = loginSchema.parse(request);
            console.info(result);
        }
        catch (e) {
            if (e instanceof zod_1.ZodError) {
                console.info(e.errors);
                e.errors.forEach((err) => {
                    console.info(err.message);
                });
            }
        }
    }));
});
