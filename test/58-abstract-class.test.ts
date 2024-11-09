describe("Abstract Class", () => {
  // membuat abstract class
  abstract class Customer {
    readonly id: number;
    abstract name: string; // yang abstrac tidak perlu di deklarasikan

    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.info("Hello");
    }

    abstract sayHello(name: string): void; // karena abstract tanpa implementasi dalam nya juga tidak apa apa
  }

  // child class
  // karena turunan dari parent abstract class, semua yang ada kata kunci abstract wajib di implementasikan detail nya di child nya
  class RegularCustomer extends Customer {
    // wajib di tulis ulang yang dari parent ada abstract nya, atau di implmentasikan di child nya
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should support abstract class in typescript", () => {
    // const customer1 = new Customer(); //tidak akan bisa karena tidak bisa membuat object dari parent nya, harus dari child nya

    // membuat object menggunakan child abstract class (ini baru bisa)
    const customer1 = new RegularCustomer(1, "rofi");
    customer1.sayHello("budi");
  });
});
