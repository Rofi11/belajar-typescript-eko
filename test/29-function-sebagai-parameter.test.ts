describe("Function Sebagai Parameter", () => {
  it("Should support function sebagai parameter", () => {
    // membuat fucntion yang menerima parameter funtion (perhatikan cara deklare nya)
    //                 nama callback parameter   parameter => return function callback : return value fucntion utama
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    // membuat function yang akan di kirim menjadi callback funtion
    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("eko", toUpper)).toBe("Hello EKO");
  });

  it("Should Support anonymous function", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    // mengirim langscung dengar anonymous function
    expect(
      sayHello("rofi", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello ROFI");
  });

  it("Should Support arrow function", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    // mengirim langscung dengar arrow function
    expect(sayHello("rofi", (name: string): string => name.toUpperCase())).toBe(
      "Hello ROFI"
    );
  });
});
