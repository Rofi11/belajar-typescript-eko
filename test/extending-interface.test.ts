import { Employee, Manager } from "../src/extending-interface";

describe("Extending Interface", () => {
  it("Should support extending interface in Typescript", () => {
    const employee: Employee = {
      id: "1",
      name: "eko",
      division: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Rofi",
      division: "IT",
      numberOfEmployee: 10,
    };

    console.info(manager);
  });
});
