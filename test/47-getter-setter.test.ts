describe("Getter and Setter", () => {
  class Category {
    // buat variable nya
    _name?: string;

    // membuat get untuk mengambil data nya
    public get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "Empty";
      }
    }

    // membuat set untuk memasukan data kedalam variabel
    public set name(value: string) {
      // membuat kondisi agar ridak ada perubahan data (optional)
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("shoul support in class", () => {
    // buat variabel dari class
    const category = new Category();
    // call si get nya
    console.info(category.name);

    category.name = "Food";
    console.info(category.name);

    category.name = "";
    console.info(category.name);
  });
});
