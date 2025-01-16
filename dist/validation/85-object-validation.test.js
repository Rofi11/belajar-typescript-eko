"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
describe("Object Validation", () => {
    it("should can validate object", () => {
        const loginSchema = zod_1.z.object({
            //masukan key dan value nya
            username: zod_1.z.string().email(),
            password: zod_1.z.string().min(3).max(20),
        });
        // buat contoh data request nya
        // data yang tidak sesuai schema akan langsung di ignore
        const request = {
            username: "eko@test.com",
            password: "rahasia",
            ignore: "ignore",
            name: "eko kurniawan",
        };
        // cek validation
        const result = loginSchema.parse(request);
        console.info(result);
    });
    // Nested Object
    it("should can validate nested object", () => {
        // masukan key dan value nya
        const createUserSchema = zod_1.z.object({
            id: zod_1.z.string().max(100),
            name: zod_1.z.string().max(100),
            address: zod_1.z.object({
                street: zod_1.z.string().max(100),
                city: zod_1.z.string().max(100),
                zip: zod_1.z.string().max(10),
                country: zod_1.z.string().max(100),
            }),
        });
        const request = {
            id: "123",
            name: "eko",
            address: {
                street: "Jl.Surya K",
                city: "Jakarta",
                zip: "12345",
                country: "Indonesia",
            },
        };
        const result = createUserSchema.parse(request);
        console.info(result);
    });
});
