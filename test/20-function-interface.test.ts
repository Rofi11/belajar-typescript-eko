import { AddFunction, Person } from "../src/20-function-interface";
describe("function Interface", () => {
  it("Should support  function interface in Typescript", () => {
    // menggunakan function interface (video 20)
    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  // function interface 2 (video 23)
  it("Should support fucntion interface 2 in typescript", () => {
    // contoh nya
    const person: Person = {
      name: "Rofi",
      // kalo di Js mah membuat method didalam object
      sayHello: function (name: string): string {
        return `Hello ${name}, My name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Budi"));
  });
});
