describe("Generic promise", () => {
  // membuat Promise Function
  // kita bisa memberitahu hasil return nya adalah Promise
  async function fetchData(value: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (value == "eko") {
          resolve(`hello ${value}`);
        } else {
          reject("Not Found");
        }
      }, 1000);
    });
  }

  it("should support generic promise (successful case)", async () => {
    // bisa pakai try catch juga
    const result = await fetchData("eko");
    expect(result).toBe("hello eko");
    console.info(result); // Optional
  });

  it("should handle generic promise error (failure case)", async () => {
    try {
      await fetchData("Budi");
    } catch (error) {
      expect(error).toBe("Not Found");
      console.info(error); // Optional
    }
  });
});
