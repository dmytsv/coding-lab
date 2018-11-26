// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// for loop
function pyramid0(n) {
  for (let i = 1, pound = 1; i <= n; i++, pound += 2) {
    let step =
      new Array(n - i).fill(" ").join("") +
      new Array(pound).fill("#").join("") +
      new Array(n - i).fill(" ").join("");
    console.log(step);
  }
}

// recursion
function pyramid1(n, row = 0, step = "") {
  if (row === n) {
    return;
  }
  if (step.length === n * 2 - 1) {
    console.log(step);
    return pyramid(n, row + 1);
  }
  if (step.length >= n - 1 - row && step.length < n + row) {
    step += "#";
  } else {
    step += " ";
  }
  pyramid(n, row, step);
}
