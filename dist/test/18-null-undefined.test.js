"use strict";
describe("Optional Parameter null dan undefined", () => {
    it("should support null dan undefined", () => {
        // untuk membuat option tipe data bisa null atau undefined
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else if (name == null) {
                console.info("Hello null");
            }
            else if (name == undefined) {
                console.info("Hello");
            }
        }
        sayHello("eko");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
