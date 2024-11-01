"use strict";
describe("Super Method", () => {
    // parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
        // method pertama
        sayHello(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    // child class
    class Manager extends Employee {
        // memanggil method nya dengan menggunakan kata kunci super (yang akan terpanggil adalah yg parent class nya)
        sayHello(name) {
            super.sayHello(name);
            console.info("i am your manager");
        }
    }
    it("shouuld support in super method", () => {
        // panggil dari parent class
        const employee = new Employee("eko");
        employee.sayHello("budi");
        // panggil dari child class yang menggunakan super untuk memanggil method yng di miliki oleh parentnya
        const manager = new Manager("Rofi");
        manager.sayHello("waris");
    });
});
