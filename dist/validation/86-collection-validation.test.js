import { z } from "zod";
describe("Collection validation", () => {
    it("should support array validation", () => {
        // array wajib menetukan tipe data didalam array nya
        const schema = z.array(z.string().email()).min(1).max(10);
        const request = ["eko@example.com", "budi@example.com"];
        const result = schema.parse(request);
        console.info(result);
    });
    it("should support set validation", () => {
        // Set wajib menetukan tipe data didalam array nya
        const schema = z.set(z.string().email()).min(1).max(10);
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
        const schema = z.map(z.string(), z.string().email());
        const request = new Map([
            ["eko", "eko@example.com"],
            ["budi", "budi@example.com"],
        ]);
        const result = schema.parse(request);
        console.info(result);
    });
});
