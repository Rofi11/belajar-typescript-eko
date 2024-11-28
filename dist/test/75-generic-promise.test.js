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
describe("Generic promise", () => {
    // membuat Promise Function
    // kita bisa memberitahu hasil return nya adalah Promise
    function fetchData(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (value == "eko") {
                        resolve(`hello ${value}`);
                    }
                    else {
                        reject("Not Found");
                    }
                }, 1000);
            });
        });
    }
    it("should support generic promise (successful case)", () => __awaiter(void 0, void 0, void 0, function* () {
        // bisa pakai try catch juga
        const result = yield fetchData("eko");
        expect(result).toBe("hello eko");
        console.info(result); // Optional
    }));
    it("should handle generic promise error (failure case)", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield fetchData("Budi");
        }
        catch (error) {
            expect(error).toBe("Not Found");
            console.info(error); // Optional
        }
    }));
});
