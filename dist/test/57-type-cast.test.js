"use strict";
describe("Type Cast", () => {
    // parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    // child class
    class Manager extends Employee {
    }
    class VicePrecident extends Manager {
    }
    // mmebuat function polymorphim dan Type cast yang benar (dengan urutan yang benar --> dari child terbaru)
    function sayHello(employee) {
        if (employee instanceof VicePrecident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello Manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    // mmebuat function yang salah (urutan nya salah)
    function sayHelloWrong(employee) {
        if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello Manager ${manager.name}`);
        }
        else if (employee instanceof VicePrecident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it("should support polymorphism in typescript", () => {
        let employee = new Employee("rofi");
        console.info(employee);
        // ini adalah polymorphism
        employee = new Manager("Rey");
        console.info(employee);
        employee = new VicePrecident("Rofi");
        console.info(employee);
    });
    it("Should support method parameter polymorphism dan Type cast", () => {
        // polymorphism dengan method/function
        sayHello(new Employee("Eko"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePrecident("Joko"));
    });
    it("Should support method yang salah", () => {
        // polymorphism dengan method/function
        sayHelloWrong(new Employee("Eko"));
        sayHelloWrong(new Manager("Budi"));
        sayHelloWrong(new VicePrecident("Joko"));
    });
});
