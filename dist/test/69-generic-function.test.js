"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe("Function Generic", () => {
    class GenericData {
        constructor(value) {
            this.value = value;
        }
        // 1. membuat function generic
        get() {
            return this.value;
        }
        set(value) {
            return this.value;
        }
        // 2. membuat function generic didalam class secara mandiri
        static createArray(item1, item2) {
            return [item1, item2];
        }
    }
    // 3. membuat function generic secara terpisah
    function Create(value) {
        return value;
    }
    it("should suppport function generic from class", () => __awaiter(void 0, void 0, void 0, function* () {
        //memanggil cara 1
        const result1 = new GenericData("Hello function generic");
        console.info("dari get", result1.get());
        console.info("dari set", result1.set("ini dari set")); // harus memasukan argument
        //memanggil cara ke 2
        const result2 = GenericData.createArray(10, 20);
        console.info(result2);
    }));
    it("should support function generic yang terpisah", () => __awaiter(void 0, void 0, void 0, function* () {
        // membuat variabel penampung dan memanggil function generic
        const resultString = Create("Eko");
        expect(resultString).toBe("Eko");
        console.info(resultString);
        // contoh yang number
        const resultNumber = Create(123);
        expect(resultNumber).toBe(123);
        console.info(resultNumber);
    }));
});
