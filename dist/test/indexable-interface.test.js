describe("Indexable Interface", () => {
    it("Should support indexable interface use number index in Typescript", () => {
        // interface array
        const names = ["Eko", "Kurniawan", "Khannedy"];
        console.info(names[0]);
    });
    it("Should support indexable interface use string index in Typescript", () => {
        // dictionaty
        const dictionary = {
            name: "Rofi",
            address: "Cimahi",
        };
        console.info(dictionary["name"]);
        expect(dictionary["name"]).toBe("Rofi");
        expect(dictionary["address"]).toBe("Cimahi");
    });
});
export {};
