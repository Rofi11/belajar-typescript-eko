import { CustomerType } from "../src/enum";
describe("Enum", () => {
    it("Should suppport in Typescript about enum", () => {
        // cara menggunaka enum
        // buat object
        const customer = {
            id: 1,
            name: "rofi",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    });
});
