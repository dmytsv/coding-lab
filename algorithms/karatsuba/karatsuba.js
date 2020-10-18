/**
 * Karatsuba algorithm for fast multiplication
 *
 * ab * cd == (a*c)^(m*2) + ((a+b)*(c+d) - a*c - b*d)^m + b*d
 * where m = max( ab.length, cd.length ) / 2
 * (a+b)(c+d) - ac - bd == ac + ad + bc + bd - ac - bd == ad + bc
 * @param { Number } x
 * @param { Number } y
 * @returns { Number }
 */
function karatsuba(x, y) {
  if (x < 10 || y < 10) return x * y;

  const n = Math.max(x.toString().length, y.toString().length);
  const m = Math.ceil(n / 2);

  const a = Math.floor(x / 10 ** m);
  const b = x % 10 ** m;
  const c = Math.floor(y / 10 ** m);
  const d = y % 10 ** m;

  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);
  const adbc = karatsuba(a + b, c + d) - ac - bd;

  return ac * 10 ** (m * 2) + adbc * 10 ** m + bd;
}

console.assert(karatsuba(2, 2) == 2 * 2, '2 * 2 == 4');
console.assert(karatsuba(0, 1) == 0 * 1, '0 * 1 == 0');
console.assert(karatsuba(1, 0) == 1 * 0, '1 * 0 == 0');
console.assert(karatsuba(1, 42) == 1 * 42, '1 * 42 == 42');
console.assert(karatsuba(1000, 64) == 1000 * 64, '1000 * 64 == 64000');
console.assert(karatsuba(10000, 1000) == 10000 * 1000, '10000 * 1000 == 10000000');
console.assert(karatsuba(1024, 2048) == 1024 * 2048, '1024 * 2048 == 2097152');
