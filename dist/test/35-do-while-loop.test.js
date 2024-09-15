"use strict";
describe("Do While loop", () => {
    it("Should support Do While Loop in Typescript", () => {
        let counter = 0;
        do {
            console.info(counter);
            counter++;
        } while (counter < 10);
    });
});
