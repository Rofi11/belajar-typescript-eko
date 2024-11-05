"use strict";
describe("Instance Of", () => {
    class Employee {
    }
    class Manager {
    }
    const budi = new Employee();
    const eko = new Manager();
    it("Should have problem using typeof", () => {
        // akan menghasilakn object
        console.info(typeof budi);
        console.info(typeof eko);
    });
    it("should support instanceof (yang dihalsikan akan berbentuk boolean)", () => {
        // budi
        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Manager).toBe(false);
        // eko
        expect(eko instanceof Employee).toBe(false);
        expect(eko instanceof Manager).toBe(true);
    });
});
