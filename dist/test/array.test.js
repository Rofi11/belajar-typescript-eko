"use strict";
describe("Array", () => {
    it("should same with javascript", () => {
        const names = ["eko", "rofi", "kurniawan"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
        // names[0] = "kkk"; //kalo di sini masih bisa di ubah
    });
    it("Read only Array", () => {
        const hobbies = ["membaca", "Menulis"];
        console.info(hobbies);
        // hobbies[0]= "llll" // tidak bisa di ubah/manipulasi karena ReadOnly
    });
    it("Should support tuple", () => {
        const person = ["eko", "kurniawan", 30];
        console.info(person);
    });
});
