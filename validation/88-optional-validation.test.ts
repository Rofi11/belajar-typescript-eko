import { z } from "zod";

describe("Optional Validation", () => {
  it("should can support optional validation", () => {
    const registerSchema = z.object({
      username: z.string().email(),
      password: z.string().min(6).max(20),
      firstname: z.string().min(3).max(100),
      // yang lastname dibuat jadi optional / tidak mandatory, tinngal tambahkan optional()
      lastname: z.string().min(3).max(100).optional(),
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
