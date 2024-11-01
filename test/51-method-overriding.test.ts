describe("Method Overriding", () => {
  // parent class
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // method pertama
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  // child class
  class Manager extends Employee {
    // overriding method dari parent class
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}, i am your manager`);
    }
  }
  it("shouuld support in method overriding", () => {
    // panggil dari parent class sebelum di overriding method/function sayhello
    const employee = new Employee("eko");
    employee.sayHello("budi");

    // panggil dari child class yang sudah di overriding method dan function nya
    const manager = new Manager("Rofi");
    manager.sayHello("waris");
  });
});
