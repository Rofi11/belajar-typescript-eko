describe("Break dan Continue", () => {
  it("Should support Break dan Continue in Typescript", () => {
    let counter: number = 0;

    do {
      //increment variabel
      counter++;

      // kondisi yang akan memberhentikan looping
      if (counter == 10) {
        break;
      }

      // kondisi yang terpenuhi akan menlanjutakn looping dengan perintah continue, akan mengskip angka genap
      if (counter % 2 == 0) {
        continue;
      }

      // kalo ganjil akan terprint
      console.info(counter);
    } while (true);
  });
});
