describe("Properties", () => {
  // membuat class
  class Customer {
    // membuat properties
    readonly id: number;
    name: string = ""; // ini contoh cara membuat default value nya
    age?: number;
    // membuat constructor
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  it("Should support Properties in Typescript", () => {
    const customer = new Customer(1, "john");
    customer.age = 20;

    console.info(customer);
  });
});
