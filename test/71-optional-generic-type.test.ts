describe("Optional Generic Type", () => {
  // membuat class yang akan dimasukan multiple (jumhlah dari generic nya tidak terbatas)
  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }

  // class generic yang constructor nya tidak di declare
  class SimpleGeneric<T> {
    private value?: T;

    setValue(value: T) {
      this.value = value;
    }

    getValue(): T | undefined {
      return this.value;
    }
  }

  it("should support optional generic type (it is declared in constructor)", () => {
    // kita tidak perlu menulis tipe data generic yang sudah di declare di constructor, bisa secara implisit, nanti typescript akan mencari tau sendiri
    const entry = new Entry(1, "hello");
    // entry.key = "hello"; // ini akan error karena sudah terdekteksi nya number
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("hello");
  });

  it("should create simple generic", () => {
    // karena di class nya tidak di declare maka ketika di call wajib di declare
    const simple = new SimpleGeneric<string>();
    simple.setValue("eko");

    expect(simple.getValue()!.toUpperCase()).toBe("EKO");
  });
});
