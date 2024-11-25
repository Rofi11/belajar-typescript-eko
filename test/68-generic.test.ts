describe("Generic", () => {
  // membuat class generic, nanti mah di pisah saja
  class GenericData<T> {
    // T ini akan menampung tipe data fleksibel kiriman dari varibale yang di panggil
    value: T;
    constructor(value: T) {
      this.value = value;
    }
  }

  it("Should support multiple data type", () => {
    // disini akan mengirim tipe data number didalam diamond <>
    const dataNumber = new GenericData<number>(123);
    expect(dataNumber.value).toBe(123);
    console.info(dataNumber.value);
    // ketika kita memasukan selain number sebelum di rubah akan terjadi error
    // dataNumber.value = "eko"
    // dataNumber.value = "true"

    // disini kita akan membuat data baru dengan mengirim tipe data string
    const dataString = new GenericData<string>("Eko");
    const upper = dataString.value.toUpperCase();
    expect(upper).toBe("EKO");
    console.info(upper);
  });
});
