import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("Should return hello rofi", () => {
    expect(sayHello("rofi")).toBe("Hello rofi");
  });
});
