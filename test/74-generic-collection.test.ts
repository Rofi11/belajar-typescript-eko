describe("Generic Collection", () => {
  it("should support support array", () => {
    // 1. membuat array generic biasa
    const array = new Array<string>();
    array.push("eko");
    array.push("kurniawan");
    // array.push(123) // ini akan error karena tipe data yang bisa di tampung kedalam array ini adalah string bukan number
    console.info(array);
    expect(array[0]).toBe("eko");
    expect(array[1]).toBe("kurniawan");
  });

  it("Should Support Set", () => {
    // karena tipe data yang di terima unik, tipe data yang sama tidak akan di masukan, tidak sama seperti array
    const set = new Set<string>();
    set.add("eko");
    set.add("kurniawan");
    set.add("eko"); // ini tidak akan masuk kedalam set object nya, karena sudah ada yang sama didalam nya
    console.info(set);
    expect(set.size).toBe(2);
    expect(set.has("eko")).toBe(true);
    expect(set.has("kurniawan")).toBe(true);
  });

  it("Should support Map", () => {
    const map = new Map<string, number>();
    map.set("eko", 100);
    map.set("budi", 96);
    console.info(map);

    expect(map.get("eko")).toBe(100);
    expect(map.get("budi")).toBe(96);
  });
});
