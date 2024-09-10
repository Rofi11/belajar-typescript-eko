describe("function Interface", () => {
    it("Should support  function interface in Typescript", () => {
        // menggunakan function interface (video 20)
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    // function interface 2 (video 23)
    it("Should support fucntion interface 2 in typescript", () => {
        // contoh nya
        const person = {
            name: "Rofi",
            // kalo di Js mah membuat method didalam object
            sayHello: function (name) {
                return `Hello ${name}, My name is ${this.name}`;
            },
        };
        console.info(person.sayHello("Budi"));
    });
});
export {};
