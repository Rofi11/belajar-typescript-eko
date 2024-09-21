describe("Class", () => {
  // membuat class
  class Customer {
    // membuat constructor dalam class (bisa mengirim parameter, karena seperti function)
    constructor() {
      console.info("Create new Customer");
    }
  }

  class Order {}
  it("Should support constructor in Typescript", () => {
    new Customer();
    new Customer();
  });
});
