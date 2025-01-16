"use strict";
// ceritanya kita punya pulahan / ratusan function
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtil = void 0;
// grouping menggunakan namespace
var MathUtil;
(function (MathUtil) {
    // isi kode nya buat didalam sini
    MathUtil.PI = 3.14;
    function Sum(...values) {
        let total = 0;
        for (const value of values) {
            total += value;
        }
        return total;
    }
    MathUtil.Sum = Sum;
})(MathUtil || (exports.MathUtil = MathUtil = {}));
