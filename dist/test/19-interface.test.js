"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("Interface", () => {
    it("Should support interface in Typescript", () => {
        // menggunakan interface
        const seller = {
            id: 1,
            name: "Toko ABC",
            nib: "123",
            npwp: "456",
        };
        seller.name = "Toko eko";
        // seller.nib = "sdadw"
        console.info(seller);
    });
});
