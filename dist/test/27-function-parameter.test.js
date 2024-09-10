"use strict";
describe("Function parameter", () => {
    it("Should support function parameter in typescript", () => {
        // membuat default value untuk parameter
        function sayHello(name = "Guest") {
            return `hello ${name}`;
        }
        expect(sayHello("eko")).toBe("hello eko");
        expect(sayHello()).toBe("hello Guest");
    });
    it("Should support rest parameter", () => {
        //membuat function rest parameter
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("Should support optional parameter", () => {
        // optional parameter dengan menggunakan ?
        function sayHello(firstName, lastName) {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello("Eko")).toBe("Hello Eko");
        expect(sayHello("Eko", "Kurniawan")).toBe("Hello Eko Kurniawan");
    });
});
