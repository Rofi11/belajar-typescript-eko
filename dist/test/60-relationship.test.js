"use strict";
describe("Relationship", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it("should support", () => {
        // ini yang di maksud relationhip 2 class
        // kurang disarankan karena berdampak membingunkan programmer
        const person = new Customer("Eko");
        console.info(person.name);
    });
});
