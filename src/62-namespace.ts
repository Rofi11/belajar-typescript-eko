// ceritanya kita punya pulahan / ratusan function

// grouping menggunakan namespace
export namespace MathUtil {
  // isi kode nya buat didalam sini
  export const PI: number = 3.14;

  export function Sum(...values: number[]): number {
    let total: number = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }
}

// namescpace yang lain
export namespace Eko {}
export namespace Kurniawan {}
