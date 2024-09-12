"use strict";
describe("Switch Statement", () => {
    it("Should support Switch Statement in Typescript", () => {
        function sayHello(name) {
            switch (name) {
                case "Eko":
                    return "Hi Eko";
                    break;
                case "Budi":
                    return "Hi Budi";
                default:
                    return "Hello";
                    break;
            }
        }
        console.info(sayHello("Eko"));
        console.info(sayHello("Budi"));
        console.info(sayHello("Joko"));
    });
});
