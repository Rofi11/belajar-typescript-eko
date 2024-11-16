import { MathUtil } from "../src/62-namespace";
describe("Namespace (grouping by namescapce)", () => {
    it("Should support grouping by namescpase", () => {
        // jangan lupa untuk impor Namespace nya dulu
        console.info(MathUtil.PI);
        console.info(MathUtil.Sum(1, 2, 3, 4, 5));
    });
});
