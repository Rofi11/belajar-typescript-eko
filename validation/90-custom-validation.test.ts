import { RefinementCtx, z } from "zod";

describe("Custom Validation", () => {
  // membuat custom validation error didalam transform, dengan menambahkan parameter ke 2
  it("should can create custom validation", () => {
    // membuat schema
    const loginSchema = z.object({
      username: z
        .string()
        .email()
        .transform((data: string, ctx: RefinementCtx) => {
          if (data != data.toUpperCase()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: "Username harus Uppercase",
            });
            return z.NEVER;
          } else {
            return data;
          }
        }),
      password: z.string().min(6).max(20),
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
