import { Employee, Manager, VP } from "../src/73-generic-constraint";

describe("generic Constraint", () => {
  // ini generic yang tipe data nya, hanya bisa menggunakan data dari interface Employee dan turunan nya (sudah akan terscope kan)
  // sudah tidak bisa nembak langsung seperti contoh2 sebelum nya
  class EmployeeData<T extends Employee> {
    constructor(public employee: T) {}
  }

  it("should support constraint", async () => {
    const data1 = new EmployeeData<Employee>({
      id: 1,
      name: "Rofi",
    });
    console.info(data1);

    const data2 = new EmployeeData<Manager>({
      id: 2,
      name: "Eko",
      totalEmployee: 100,
    });
    console.info(data2);

    const data3 = new EmployeeData<VP>({
      id: 2,
      name: "Eko",
      totalEmployee: 100,
      totalManager: 10,
    });
    console.info(data3);

    // const data4 = new EmployeeData<string>("Eko"); // ini akan error karena nembak langsung tidak termasuk didalam employee dan turunan nya
  });
});
