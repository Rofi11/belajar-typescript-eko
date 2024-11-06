"use strict";
describe("Polymorphism", () => {
    // parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    // child class
    class Manager extends Employee {
    }
    class ViceManager extends Manager {
    }
    // mmebuat function
    function sayHello(employee) {
        console.info(`Hello ${employee.name}`);
    }
    it("should support polymorphism in typescript", () => {
        let employee = new Employee("rofi");
        console.info(employee);
        // ini adalah polymorphism
        employee = new Manager("Rofi");
        console.info(employee);
        employee = new ViceManager("Rofi");
        console.info(employee);
    });
    it("Should support method parameter polymorphism", () => {
        // polymorphism dengan method/function
        sayHello(new Employee("Eko"));
        sayHello(new Manager("Budi"));
        sayHello(new ViceManager("Joko"));
    });
});
