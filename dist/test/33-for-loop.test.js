"use strict";
describe("For loop", () => {
    it("Should support For loop in Typescript", () => {
        const names = ["Eko", "Kurniawan", "Khannedy"];
        // for loop biasa
        for (let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        // for of
        for (const name of names) {
            console.info(name);
        }
        // for in
        for (const index in names) {
            console.info(names[index]);
        }
    });
});
