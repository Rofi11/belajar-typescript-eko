import { AddFunction } from "../src/function-interface";
describe("function Interface", () => {
  it("Should support  function interface in Typescript", () => {
    // menggunakan function interface
    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });
});
