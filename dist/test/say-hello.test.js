"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const say_hello_1 = require("../src/say-hello");
describe("sayHello", () => {
    it("Should return hello rofi", () => {
        expect((0, say_hello_1.sayHello)("rofi")).toBe("Hello rofi");
    });
});
