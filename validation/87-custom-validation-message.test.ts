import { z, ZodError } from "zod";

describe("Custom Validation Message", () => {
  it("should can validate object with message", async () => {
    // membuat schema object dan memasukan custom validation message nya
    const loginSchema = z.object({
      username: z.string().email("username harus email"),
      password: z
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
    } catch (e) {
      if (e instanceof ZodError) {
        console.info(e.errors);
        e.errors.forEach((err) => {
          console.info(err.message);
        });
      }
    }
  });
});
