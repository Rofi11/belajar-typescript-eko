describe("Generic Default Parameter", () => {
  // class generic dengan default parameter
  class SimpleGeneric<T = string> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }

  it("should support default parameter", () => {
    // sudah tidak perlu mendeklare lagi, kecuali kita mau merubah tipe data generic nya menjadi yang lain
    const simple = new SimpleGeneric();
    simple.setValue("eko");
    expect(simple.getValue()!.toUpperCase()).toBe("EKO");

    // contoh tipe data generic yang di ubah (contoh menjadi number)
    const genericNumber = new SimpleGeneric<number>();
    genericNumber.setValue(123);
    expect(genericNumber.getValue()).toBe(123);
  });
});
