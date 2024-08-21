describe("Union type", () => {
  it("Should support in typescript", () => {
    let sample: number | string | boolean = "eko";
    // console.info(sample);

    // boleh karena sudah di deklare di union type
    sample = 100;
    // console.info(sample);

    sample = true;
    // console.info(sample);
  });

  it("should support type of operator", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("eko")).toBe("EKO");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
