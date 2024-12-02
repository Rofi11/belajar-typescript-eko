import { z } from "zod";
describe("Object Validation", () => {
    it("should can validate object", () => {
        const loginSchema = z.object({
            //masukan key dan value nya
            username: z.string().email(),
            password: z.string().min(3).max(20),
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
        const createUserSchema = z.object({
            id: z.string().max(100),
            name: z.string().max(100),
            address: z.object({
                street: z.string().max(100),
                city: z.string().max(100),
                zip: z.string().max(10),
                country: z.string().max(100),
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
