describe("Tanpa Generic", () => {
  class Data {
    value: any;
    constructor(value: any) {
      this.value = value;
    }
  }

  it("should accept all values", async () => {
    const data = new Data("Eko");
    // data.value = 100; // ini akan error karena di tipe data number tidak ada fucntion toUppercase()

    console.info(data.value.toUpperCase());
  });
});
