// Allows you to use for of loops
// and use destructuring with integers
// --- Examples
// [...9]
// [...(-9)];
// for (let i of 10) { *** some code *** }

Number.prototype[Symbol.iterator] = function*() {
  const num = Number(this);
  if (!Number.isInteger(num)) throw "Number should be an integer.";

  let [i, end] = num >= 0 ? [0, num] : [num, 0];

  while (i <= end) yield i++;

};
