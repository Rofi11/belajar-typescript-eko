describe("Error Handling", () => {
  // mmebuat class extends dari class Error bawan Typescript
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  // make function for supporting error
  // jika ada yang error akan mengirim ke kelas validation error, lalu di kirim ke parent nya nyaitu error
  function doubleit(value: number) {
    if (value < 0) {
      throw new ValidationError("Value cannot be less than 0");
    }

    return value * 2;
  }

  it("should support error handling (try catch)", () => {
    try {
      const result = doubleit(-1);
      console.info("kalo berhasil", result);
    } catch (e) {
      if (e instanceof ValidationError) {
        console.info("kalo Error", e.message);
      }
    }
  });
});
