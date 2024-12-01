import { z, ZodError } from "zod";
describe("Validation Error", () => {
    it("should return zod error if invalid use exception(try catch)", () => {
        const schema = z.string().email().min(3).max(100);
        // kita tangkap error nya dengan error handling try catch
        // cara ini menggunakan parse
        try {
            schema.parse("ek");
        }
        catch (err) {
            if (err instanceof ZodError) {
                // console.error(err);
                console.info(err.errors);
            }
        }
    });
    it("should return zod error without exception(try catch)", () => {
        const schema = z.string().email().min(3).max(100);
        /*
        1. kita tangkap error tanpa try catch
            > dengan menggunakan safeParse akan mengembalikan success nya true / false
            > jika result berisi success : false berarti ada error nya
        */
        const result = schema.safeParse("eko@example.com");
        // console.info(result);
        // 2. kita buat if condtional untuk menangkap error nya, jika true ambil data, jika false ambil error
        if (result.success) {
            console.info(result.data);
        }
        else {
            console.error(result.error);
        }
    });
});
