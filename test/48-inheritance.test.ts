describe("Inheritance", () => {
  // parent class
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }

  // pewarisan class use extends
  class Manager extends Employee {}

  class Director extends Manager {}

  it("Should support", () => {
    const employee = new Employee("Eko");
    console.info(employee.name);

    const manager = new Manager("Jawa");
    console.info(manager.name);

    const director = new Director("Rofi");
    console.info(director.name);
  });
});
