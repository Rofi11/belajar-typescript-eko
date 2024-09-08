import { Customer, CustomerType } from "../src/17-enum";

describe("Enum", () => {
  it("Should suppport in Typescript about enum", () => {
    // cara menggunaka enum
    // buat object
    const customer: Customer = {
      id: 1,
      name: "rofi",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
