"use strict";
describe("Multiple generic Type", () => {
    // membuat class yang akan dimasukan multipel generic (jumhlah dari generic nya tidak terbatas)
    class Entry {
        constructor(key, value) {
            this.key = key;
            this.value = value;
        }
    }
    class Triple {
        constructor(first, second, third) {
            this.first = first;
            this.second = second;
            this.third = third;
        }
    }
    it("should support multipel generic type", () => {
        //memanggil class nya
        const entry = new Entry(1, "hello");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("hello");
        const triple = new Triple(1, "hello", true);
        expect(triple.first).toBe(1);
        expect(triple.second).toBe("hello");
        expect(triple.third).toBe(true);
    });
});
