"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("Extending Interface", () => {
    it("Should support extending interface in Typescript", () => {
        const employee = {
            id: "1",
            name: "eko",
            division: "IT",
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Rofi",
            division: "IT",
            numberOfEmployee: 10,
        };
        console.info(manager);
    });
});
