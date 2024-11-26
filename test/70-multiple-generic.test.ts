describe("Multiple generic Type", () => {
  // membuat class yang akan dimasukan multipel generic (jumhlah dari generic nya tidak terbatas)
  class Entry<K, V> {
    constructor(public key: K, public value: V) {}
  }

  class Triple<K, V, T> {
    constructor(public first: K, public second: V, public third: T) {}
  }
  it("should support multipel generic type", () => {
    //memanggil class nya
    const entry = new Entry<number, string>(1, "hello");
    expect(entry.key).toBe(1);
    expect(entry.value).toBe("hello");

    const triple = new Triple<number, string, boolean>(1, "hello", true);
    expect(triple.first).toBe(1);
    expect(triple.second).toBe("hello");
    expect(triple.third).toBe(true);
  });
});
