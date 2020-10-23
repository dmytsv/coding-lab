/**
 * Boyer Moore Horspool pattern matching algorithm
 * @param {String} text
 * @param {String} pattern
 * @returns {Number} index of match or -1
 */
function boyerMooreHorspool(text, pattern) {
  if (!text || !pattern || text.length < pattern.length) return -1;
  const skip = new Array(256).fill(pattern.length);
  for (let i = 0; i < pattern.length - 1; i++) {
    skip[pattern.charCodeAt(i)] = Math.max(i, pattern.length - i - 1);
  }

  if (skip[pattern.charCodeAt(pattern.length - 1)] < pattern.length) {
    skip[pattern.charCodeAt(pattern.length - 1)] = 1;
  }

  let i = pattern.length - 1;
  while (i < text.length) {
    for (let j = pattern.length - 1, k = i; pattern[j] === text[k]; j--, k--) {
      if (j === 0) return k;
    }
    i += skip[text.charCodeAt(i)];
  }
  return -1;
}

console.assert(boyerMooreHorspool('', 'aab') == -1, "boyerMooreHorspool('', 'aab') == -1");
console.assert(boyerMooreHorspool('abc', '') == -1, "boyerMooreHorspool('abc', '') == -1");
console.assert(boyerMooreHorspool('aabaacaa', 'aaa') == -1,"boyerMooreHorspool('aabaacaa', 'aaa') == -1");
console.assert(boyerMooreHorspool('a', 'aa') == -1, "boyerMooreHorspool('a', 'aa') == -1");
console.assert(boyerMooreHorspool('aa', 'a') == 0, "boyerMooreHorspool('aa', 'a') == 0");
console.assert(boyerMooreHorspool('abcabc', 'abc') == 0,"boyerMooreHorspool('abcccc', 'abc') == 0");
console.assert(boyerMooreHorspool('aaabbcabc', 'abc') == 6,"boyerMooreHorspool('aaabbcabc', 'abc') == 6");
console.assert(boyerMooreHorspool('aaaaaaaabaab', 'aab') == 6,"boyerMooreHorspool('aaaaaaaab', 'aab') == 6");