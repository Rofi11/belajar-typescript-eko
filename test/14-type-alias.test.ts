import { Category, Product } from "../src/14-type-alias";

describe("Tyoe Alias", () => {
  it("should support in typescript", () => {
    // membuat object
    const category: Category = {
      id: 1, // sudah bisa menggunakan string atau number
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung S20",
      price: 200000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
