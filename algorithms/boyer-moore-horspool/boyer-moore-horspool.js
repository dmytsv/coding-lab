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
    skip[pattern.charCodeAt(i)] = pattern.length - i - 1;
  }

  let i = 0;
  while (text.length - i >= pattern.length) {
    for (let j = pattern.length - 1; pattern[j] === text[i + j]; j--) {
      if (j === 0) return i;
    }

    i += skip[text.charCodeAt(i + pattern.length - 1)];
  }

  return -1;
}

console.assert(boyerMooreHorspool('', 'aab') === -1, "boyerMooreHorspool('', 'aab') === -1");
console.assert(boyerMooreHorspool('abc', '') === -1, "boyerMooreHorspool('abc', '') === -1");
console.assert(boyerMooreHorspool('aabaacaa', 'aaa') === -1,"boyerMooreHorspool('aabaacaa', 'aaa') === -1");
console.assert(boyerMooreHorspool('a', 'aa') === -1, "boyerMooreHorspool('a', 'aa') === -1");
console.assert(boyerMooreHorspool('aa', 'a') === 0, "boyerMooreHorspool('aa', 'a') === 0");
console.assert(boyerMooreHorspool('abcabc', 'abc') === 0,"boyerMooreHorspool('abcccc', 'abc') === 0");
console.assert(boyerMooreHorspool('aaabababb', 'ababa') === 2, "boyerMooreHorspool('aaabababb', 'ababa') === 2");
console.assert(boyerMooreHorspool('hgfbaidaidai', 'baidai')  === 3, "boyerMooreHorspool('hgfbaidaidai', 'baidai')  === 3");
console.assert(boyerMooreHorspool('hgfcaibaidai', 'baidai') === 6, "boyerMooreHorspool('hgfcaibaidai', 'baidai') === 6");
console.assert(boyerMooreHorspool('aaabbcabc', 'abc') === 6,"boyerMooreHorspool('aaabbcabc', 'abc') === 6");
console.assert(boyerMooreHorspool('aaaaaaaabaab', 'aab') === 6,"boyerMooreHorspool('aaaaaaaab', 'aab') === 6");