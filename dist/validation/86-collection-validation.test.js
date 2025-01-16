"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
describe("Collection validation", () => {
    it("should support array validation", () => {
        // array wajib menetukan tipe data didalam array nya
        const schema = zod_1.z.array(zod_1.z.string().email()).min(1).max(10);
        const request = ["eko@example.com", "budi@example.com"];
        const result = schema.parse(request);
        console.info(result);
    });
    it("should support set validation", () => {
        // Set wajib menetukan tipe data didalam array nya
        const schema = zod_1.z.set(zod_1.z.string().email()).min(1).max(10);
        const request = new Set([
            "eko@example.com",
            "budi@example.com",
            "eko@example.com",
        ]);
        // data yang sama tidak akan masuk, seperti sifat asli set
        const result = schema.parse(request);
        console.info(result);
    });
    it("should support Map validation", () => {
        // mmebut schema dengan key dan value didalam z.map
        const schema = zod_1.z.map(zod_1.z.string(), zod_1.z.string().email());
        const request = new Map([
            ["eko", "eko@example.com"],
            ["budi", "budi@example.com"],
        ]);
        const result = schema.parse(request);
        console.info(result);
    });
});
