describe("Method", () => {
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

    // Membuat Method
    sayHello(name: string): void {
      console.info(`Hello ${name}, My name is ${this.name}`);
    }
  }

  it("Should support Method in Typescript", () => {
    const customer = new Customer(1, "john");
    customer.age = 20;
    customer.sayHello("Budi");
  });
});
