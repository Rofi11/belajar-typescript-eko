describe("Interface inheritance", () => {
  //1.  mmebuat kontrak interface
  interface HasName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): void;
  }

  // membuat class yang mengikuti kontrak interface menggunakan implements
  class Person implements HasName, CanSayHello {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("Should support interface inheritance", () => {
    const person = new Person("Eko");
    person.sayHello("Budi");
  });
});
