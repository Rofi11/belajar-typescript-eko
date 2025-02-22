import { Category, Product } from "../src/16-optional-properties";

// contoh Oprional properties mengikuti contoh type alias dan object type
describe("Optional Properties", () => {
  it("should support in typescript", () => {
    // contoh type alias
    const category: Category = {
      id: 1, // sudah bisa menggunakan string atau number
      name: "Handphone",
      description: "ini berbentuk Optional",
    };

    // di produk tidak erro padahal description nya tidak ada, karena description sudah di buat optional di optional-properties.ts
    const product: Product = {
      id: "1",
      name: "Samsung S20",
      price: 200000,
      category: category,
    };

    // contoh object type
    const person: { id: string; name: string; hobbies?: string } = {
      id: "1",
      name: "Eko",
    };

    console.info(category);
    console.info(product);
  });
});
