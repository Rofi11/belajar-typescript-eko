"use strict";
describe("Funxtion", () => {
    it("Should support function in typescript", () => {
        // contoh yang mereturn tipe data
        function sayHello(name) {
            return `hello ${name}`;
        }
        expect(sayHello("eko")).toBe("hello eko");
        // contoh yang tidak mereturn tipe data apapun (menggunakan void)
        function printHello(name) {
            console.info(`hello ${name}`);
        }
        printHello("eko");
    });
});
