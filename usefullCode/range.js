/**
 * Function analogous to Python range
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
var range = (start, end, step = 1) =>
  (() => {
    [start, end] =
      end === undefined ? (start > 0 ? [0, start] : [start, 1]) : [start, end];
    if (
      !Number.isInteger(start) ||
      !Number.isInteger(end) ||
      !Number.isInteger(step)
    )
      throw 'Non integer values are not supported';
    if (step === 0) throw 'Step cannot be 0';

    const check =
      step < 0 ? (ind, stop) => ind > stop : (ind, stop) => ind < stop;

    return {
      [Symbol.iterator]: function* () {
        for (let i = start; check(i, end); i += step) yield i;
      },
      map(cb) {
        const array = [];
        for (const i of this) array.push(cb(i, i));
        return array;
      },
      forEach(cb) {
        for (const i of this) cb(i, i);
      },
      values() {
        return this.map(i => i);
      },
      reversed() {
        return this.values().reverse();
      },
    };
  })();
