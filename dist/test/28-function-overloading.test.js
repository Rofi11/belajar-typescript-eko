"use strict";
describe("Function Overloading", () => {
    it("Should support function Overloading in typescript", () => {
        // membuat function utama dengan tipe data any
        function callme(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value * 10;
            }
        }
        expect(callme(10)).toBe(100);
        expect(callme("eko")).toBe("EKO");
    });
});
