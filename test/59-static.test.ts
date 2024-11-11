describe("Static", () => {
  class Configuration {
    // membuat Static variabel (secara otomatis akan menjadi global variabel)
    // > biasanya menggunakan HURUF CAPITAL
    // > BIasnya untuk UTILITY / HELPER
    static NAME: string = "Belajar Typescript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "Eko Kurniawan Khannedy";
  }

  class MathUtils {
    // membuat static method
    static sum(...values: number[]) {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }
  }

  it("should support for static properties/ variabel", () => {
    // cara mengakses static (dikarenakan sudah jadi global , cara akses nya tisak sama seperti contoh lainya)
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });

  it("should support for static method", () => {
    console.info(MathUtils.sum(1, 2, 3, 4, 5));
  });
});
