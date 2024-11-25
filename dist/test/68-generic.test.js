"use strict";
describe("Generic", () => {
    // membuat class generic, nanti mah di pisah saja
    class GenericData {
        constructor(value) {
            this.value = value;
        }
    }
    it("Should support multiple data type", () => {
        // disini akan mengirim tipe data number didalam diamond <>
        const dataNumber = new GenericData(123);
        expect(dataNumber.value).toBe(123);
        console.info(dataNumber.value);
        // ketika kita memasukan selain number sebelum di rubah akan terjadi error
        // dataNumber.value = "eko"
        // dataNumber.value = "true"
        // disini kita akan membuat data baru dengan mengirim tipe data string
        const dataString = new GenericData("Eko");
        const upper = dataString.value.toUpperCase();
        expect(upper).toBe("EKO");
        console.info(upper);
    });
});
