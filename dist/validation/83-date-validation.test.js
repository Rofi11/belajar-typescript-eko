import { z } from "zod";
describe("Date Validation", () => {
    it("should support date validation", () => {
        const birthDateSchema = z.coerce
            .date()
            .min(new Date(1980, 0, 1))
            .max(new Date(2020, 0, 1)); //yy-mm-dd --> bulan start dari 0 karena new date
        const birthDate = birthDateSchema.parse("1990-01-01"); //yy-mm-dd
        console.info(birthDate);
        const birthDate2 = birthDateSchema.parse(new Date(1990, 10, 10)); //yy-mm-dd --> bulan start dari 0 karena new date
        console.info(birthDate2);
    });
});
