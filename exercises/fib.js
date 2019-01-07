// basic recursion
function fib0(n) {
  if (n < 2) {
    return n;
  }
  return fib0(n - 2) + fib0(n - 1);
}

// Recursion with memoization
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fastFib(n - 2) + fastFib(n - 1);
}

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

const fastFib = memoize(slowFib);

// Math solution (fastest)
function fib1(n) {
  return Math.round(((Math.sqrt(5) - 1) / 2 + 1) ** n / Math.sqrt(5));
}

// Calculating with for loop
function fib2(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let [current, last] = [1, 0];
  for (let i = 2; i <= n; i++) {
    [current, last] = [last, current];
    current += last;
  }
  return current;
}
