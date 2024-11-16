// ceritanya kita punya pulahan / ratusan function
// grouping menggunakan namespace
export var MathUtil;
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
})(MathUtil || (MathUtil = {}));
