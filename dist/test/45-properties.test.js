"use strict";
describe("Properties", () => {
    // membuat class
    class Customer {
        // membuat constructor
        constructor(id, name) {
            this.name = ""; // ini contoh cara membuat default value nya
            this.id = id;
            this.name = name;
        }
    }
    it("Should support Properties in Typescript", () => {
        const customer = new Customer(1, "john");
        customer.age = 20;
        console.info(customer);
    });
});
