/**
 * Knutt Morris Pratt
 * pattern matching O(n) time
 * @param { String } pattern
 * @param { String } str
 * @return { Number } index of match or -1
 */
function kmp(str, pattern) {
  if (!str || !pattern) return -1;
  const lsp = new Array(pattern.length).fill(0);
  let j = 0;
  let i = 1;
  while (i < pattern.length) {
    if (pattern[i] === pattern[j]) {
      lsp[i] = j + 1;
      j++;
      i++;
    } else if (j > 0) {
      j = lsp[j - 1];
    } else {
      i++;
    }
  }

  (i = 0), (j = 0);
  while (i < str.length) {
    if (str[i] === pattern[j]) {
      i++;
      j++;
      if (j === pattern.length) return i - j;
    } else if (j > 0) {
      j = lsp[j - 1];
    } else {
      i++;
    }
  }
  return -1;
}

console.assert(kmp('', 'aab') == -1, "kmp('', 'aab') == -1");
console.assert(kmp('abc', '') == -1, "kmp('abc', '') == -1");
console.assert(kmp('aabaacaa', 'aaa') == -1, "kmp('aabaacaa', 'aaa') == -1");
console.assert(kmp('a', 'aa') == -1, "kmp('a', 'aa') == -1");
console.assert(kmp('aa', 'a') == 0, "kmp('aa', 'a') == 0");
console.assert(kmp('abcabc', 'abc') == 0, "kmp('abcccc', 'abc') == 0");
console.assert(kmp('aaabbcabc', 'abc') == 6, "kmp('aaabbcabc', 'abc') == 6");
console.assert(kmp('aaaaaaaabaab', 'aab') == 6, "kmp('aaaaaaaab', 'aab') == 6");
