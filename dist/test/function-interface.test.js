describe("function Interface", () => {
    it("Should support  function interface in Typescript", () => {
        // menggunakan function interface
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
});
export {};
