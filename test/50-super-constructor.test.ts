describe("Super Constructor", () => {
  // mmebuat parent class nya
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }
  // membuat child class yang extend ke pareng class
  class Employee extends Person {
    department: string;

    constructor(name: string, department: string) {
      // cara call constructor di parent pakai super
      super(name);
      this.department = department;
    }
  }

  it("Should support", () => {
    const employee = new Employee("rofi", "Software Development");
    console.info(employee.name);
    console.info(employee.department);
  });
});
