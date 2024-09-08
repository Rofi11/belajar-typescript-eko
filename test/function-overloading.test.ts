describe("Function Overloading", () => {
  it("Should support function Overloading in typescript", () => {
    // pertama definisikan dahulu tiep data parameter dan return paramater nya (fucntion overloading)
    function callme(value: number): number;
    function callme(value: string): string;
    // membuat function utama dengan tipe data any
    function callme(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callme(10)).toBe(100);
    expect(callme("eko")).toBe("EKO");
  });
});
