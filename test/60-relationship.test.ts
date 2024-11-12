describe("Relationship", () => {
  class Person {
    constructor(public name: string) {}
  }
  class Customer {
    constructor(public name: string) {}
  }

  it("should support", () => {
    // ini yang di maksud relationhip 2 class
    // kurang disarankan karena berdampak membingunkan programmer
    const person: Person = new Customer("Eko");
    console.info(person.name);
  });
});
