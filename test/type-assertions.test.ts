import { Person } from "../src/function-interface";
describe("Type Assertions", () => {
  it("Shouls support type assertions", () => {
    // conoth mengambil data dari javascript yg tidak ada deklare nya, atau membuat pakai tipe any
    const person: any = {
      name: "Eko",
      age: 30,
    };

    // type assertion tidak akan mengecek tipe data nya sama semua dengan interface Person atau tidak
    // makanya harus lebih hati hati, karena bersiko tinggi error dan tidak ketahuan
    const person2: Person = person as Person;

    console.info(person2);
  });
});
