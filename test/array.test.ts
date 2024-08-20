describe("Array", () => {
  it("should same with javascript", () => {
    const names: string[] = ["eko", "rofi", "kurniawan"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
    // names[0] = "kkk"; //kalo di sini masih bisa di ubah
  });

  it("Read only Array", () => {
    const hobbies: ReadonlyArray<string> = ["membaca", "Menulis"];

    console.info(hobbies);
    // hobbies[0]= "llll" // tidak bisa di ubah/manipulasi karena ReadOnly
  });

  it("Should support tuple", () => {
    const person: readonly [string, string, number] = ["eko", "kurniawan", 30];

    console.info(person);
  });
});
