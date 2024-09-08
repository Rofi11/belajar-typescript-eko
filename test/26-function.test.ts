describe("Function", () => {
  it("Should support function in typescript", () => {
    // contoh yang mereturn tipe data
    function sayHello(name: string): string {
      return `hello ${name}`;
    }
    expect(sayHello("eko")).toBe("hello eko");

    // contoh yang tidak mereturn tipe data apapun (menggunakan void)
    function printHello(name: string): void {
      console.info(`hello ${name}`);
    }

    printHello("eko");
  });
});
