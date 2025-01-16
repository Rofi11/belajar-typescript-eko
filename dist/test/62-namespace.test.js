"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _62_namespace_1 = require("../src/62-namespace");
describe("Namespace (grouping by namescapce)", () => {
    it("Should support grouping by namescpase", () => {
        // jangan lupa untuk impor Namespace nya dulu
        console.info(_62_namespace_1.MathUtil.PI);
        console.info(_62_namespace_1.MathUtil.Sum(1, 2, 3, 4, 5));
    });
});
