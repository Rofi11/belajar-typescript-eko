"use strict";
describe("Generic Default Parameter", () => {
    // class generic dengan default parameter
    class SimpleGeneric {
        setValue(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
    }
    it("should support default parameter", () => {
        // sudah tidak perlu mendeklare lagi, kecuali kita mau merubah tipe data generic nya menjadi yang lain
        const simple = new SimpleGeneric();
        simple.setValue("eko");
        expect(simple.getValue().toUpperCase()).toBe("EKO");
        // contoh tipe data generic yang di ubah (contoh menjadi number)
        const genericNumber = new SimpleGeneric();
        genericNumber.setValue(123);
        expect(genericNumber.getValue()).toBe(123);
    });
});
