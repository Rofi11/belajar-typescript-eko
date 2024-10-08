"use strict";
describe("Interface inheritance", () => {
    // membuat class yang mengikuti kontrak interface menggunakan implements
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it("Should support interface inheritance", () => {
        const person = new Person("Eko");
        person.sayHello("Budi");
    });
});
