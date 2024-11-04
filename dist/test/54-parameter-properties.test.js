"use strict";
describe("Parameter Properties", () => {
    // membuat class
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    it("Should support paremeter properties", () => {
        const person = new Person("Eko");
        console.info(person.name);
        person.name = "Rofi";
        console.info(person.name);
    });
});
