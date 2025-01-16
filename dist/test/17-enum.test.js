"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _17_enum_1 = require("../src/17-enum");
describe("Enum", () => {
    it("Should suppport in Typescript about enum", () => {
        // cara menggunaka enum
        // buat object
        const customer = {
            id: 1,
            name: "rofi",
            type: _17_enum_1.CustomerType.GOLD,
        };
        console.info(customer);
    });
});
