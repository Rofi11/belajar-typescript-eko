"use strict";
describe("Method", () => {
    // membuat class
    class Customer {
        // membuat constructor
        constructor(id, name) {
            this.name = ""; // ini contoh cara membuat default value nya
            this.id = id;
            this.name = name;
        }
        // Membuat Method
        sayHello(name) {
            console.info(`Hello ${name}, My name is ${this.name}`);
        }
    }
    it("Should support Method in Typescript", () => {
        const customer = new Customer(1, "john");
        customer.age = 20;
        customer.sayHello("Budi");
    });
});
