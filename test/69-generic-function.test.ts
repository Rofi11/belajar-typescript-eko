describe("Function Generic", () => {
  class GenericData<T> {
    // T ini akan menampung tipe data fleksibel kiriman dari varibale yang di panggil
    value: T;
    constructor(value: T) {
      this.value = value;
    }

    // 1. membuat function generic
    get(): T {
      return this.value;
    }
    set(value: T) {
      return this.value;
    }

    // 2. membuat function generic didalam class secara mandiri
    static createArray<T>(item1: T, item2: T): T[] {
      return [item1, item2];
    }
  }

  // 3. membuat function generic secara terpisah
  function Create<T>(value: T): T {
    return value;
  }

  it("should suppport function generic from class", async () => {
    //memanggil cara 1
    const result1 = new GenericData<string>("Hello function generic");
    console.info("dari get", result1.get());
    console.info("dari set", result1.set("ini dari set")); // harus memasukan argument
    //memanggil cara ke 2
    const result2: number[] = GenericData.createArray<number>(10, 20);
    console.info(result2);
  });

  it("should support function generic yang terpisah", async () => {
    // membuat variabel penampung dan memanggil function generic
    const resultString: string = Create<string>("Eko");
    expect(resultString).toBe("Eko");
    console.info(resultString);

    // contoh yang number
    const resultNumber: number = Create<number>(123);
    expect(resultNumber).toBe(123);
    console.info(resultNumber);
  });
});
