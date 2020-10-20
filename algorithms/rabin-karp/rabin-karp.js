/**
 * Rabin Karp algorithm
 * O(n) pattern matching algorithm with rolling hash
 * @param {String} text
 * @param {String} pattern
 * @returns {Number} index of match or -1
 */
function rabinKarp(text, pattern) {
  if (!text || !pattern || text.length < pattern.length) return -1;

  const PRIME = 101;
  const BASE = 256;
  const n = text.length;
  const m = pattern.length;
  let hashReset = 1;
  let textHash = 0;
  let patternHash = 0;

  // hashReset == BASE**(m-1) % PRIME
  for (let i = 0; i < m - 1; i++) {
    hashReset = (hashReset * BASE) % PRIME;
  }

  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * BASE + pattern.charCodeAt(i)) % PRIME;
    textHash = (textHash * BASE + text.charCodeAt(i)) % PRIME;
  }

  for (let i = 0; i <= n - m; i++) {
    if (textHash === patternHash) {
      inner: for (let j = i; j < m + i; ) {
        if (text[j] !== pattern[j - i]) break inner;
        j++;
        if (j === m + i) return i;
      }
    }
    // recalculate rolling hash except for last iteration
    if (i < n - m) {
      textHash =
        (BASE * (textHash - text.charCodeAt(i) * hashReset) + // remove leading char
          text.charCodeAt(i + m)) % // add next char
        PRIME;

      if (textHash < 0) textHash += PRIME;
    }
  }
  return -1;
}

console.assert(rabinKarp('', 'aab') == -1, "rabinKarp('', 'aab') == -1");
console.assert(rabinKarp('abc', '') == -1, "rabinKarp('abc', '') == -1");
console.assert(rabinKarp('aabaacaa', 'aaa') == -1,"rabinKarp('aabaacaa', 'aaa') == -1");
console.assert(rabinKarp('a', 'aa') == -1, "rabinKarp('a', 'aa') == -1");
console.assert(rabinKarp('aa', 'a') == 0, "rabinKarp('aa', 'a') == 0");
console.assert(rabinKarp('abcabc', 'abc') == 0,"rabinKarp('abcccc', 'abc') == 0");
console.assert(rabinKarp('aaabbcabc', 'abc') == 6,"rabinKarp('aaabbcabc', 'abc') == 6");
console.assert(rabinKarp('aaaaaaaabaab', 'aab') == 6,"rabinKarp('aaaaaaaab', 'aab') == 6");
