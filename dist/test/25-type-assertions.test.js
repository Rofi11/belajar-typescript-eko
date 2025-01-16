"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe("Type Assertions", () => {
    it("Shouls support type assertions", () => {
        // conoth mengambil data dari javascript yg tidak ada deklare nya, atau membuat pakai tipe any
        const person = {
            name: "Eko",
            age: 30,
        };
        // type assertion tidak akan mengecek tipe data nya sama semua dengan interface Person atau tidak
        // makanya harus lebih hati hati, karena bersiko tinggi error dan tidak ketahuan
        const person2 = person;
        console.info(person2);
    });
});
