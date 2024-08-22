describe("Tyoe Alias", () => {
    it("should support in typescript", () => {
        // membuat object
        const category = {
            id: 1, // sudah bisa menggunakan string atau number
            name: "Handphone",
        };
        const product = {
            id: "1",
            name: "Samsung S20",
            price: 200000,
            category: category,
        };
        console.info(category);
        console.info(product);
    });
});
export {};
