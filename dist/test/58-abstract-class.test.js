"use strict";
describe("Abstract Class", () => {
    // membuat abstract class
    class Customer {
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.info("Hello");
        }
    }
    // child class
    // karena turunan dari parent abstract class, semua yang ada kata kunci abstract wajib di implementasikan detail nya di child nya
    class RegularCustomer extends Customer {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it("should support abstract class in typescript", () => {
        // const customer1 = new Customer(); //tidak akan bisa karena tidak bisa membuat object dari parent nya, harus dari child nya
        // membuat object menggunakan child abstract class (ini baru bisa)
        const customer1 = new RegularCustomer(1, "rofi");
        customer1.sayHello("budi");
    });
});
