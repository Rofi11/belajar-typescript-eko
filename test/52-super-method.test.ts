describe("Super Method", () => {
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
    // memanggil method nya dengan menggunakan kata kunci super (yang akan terpanggil adalah yg parent class nya)
    sayHello(name: string): void {
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
