// Simple with for loop
function fizzBuzz0(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "fizz";
    if (i % 5 === 0) output += "buzz";
    console.log(output || i);
  }
}

// With options object
function fizzBuzz1(n, options = { fizz: 3, buzz: 5 }) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let word in options) {
      if (i % options[word] === 0) output += word;
    }
    console.log(output || i);
  }
}
