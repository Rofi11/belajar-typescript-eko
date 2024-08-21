"use strict";
describe("Type Data Any", () => {
    it("should support in typescript", () => {
        const personAny = {
            id: 1,
            name: "Muhammad Rofi",
            age: 30,
        };
        personAny.age = 31;
        personAny.address = "indonseia";
        console.info(personAny);
    });
});
