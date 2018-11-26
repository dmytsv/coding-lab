// Allows you to use for of loops
// and use destructuring with integers
// --- Examples
// [...9]
// [...(-9)];
// for (let i of 10) { *** some code *** }

Number.prototype[Symbol.iterator] = function*() {
  if (!Number.isInteger(+this)) throw "Number should be an integer.";

  let [i, end] = this >= 0 ? [0, +this] : [+this, 0];

  for (; i <= end; i++) {
    yield i;
  }
};
