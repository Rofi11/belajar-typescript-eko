describe("Object Type", () => {
  it("Should onject support in typescript", () => {
    // untuk kasus sederhana
    const person: { id: string; name: string } = {
      id: "1",
      name: "Eko",
    };

    console.info(person);

    person.id = "2";
    person.name = " rofi";

    console.info(person);
  });
});
