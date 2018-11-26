// Simple solution with array methods
function anagrams0(stringA, stringB) {
  const helper = str =>
    str
      .replace(/\W/gi, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  return helper(stringA) === helper(stringB);
}

// Simple solution for of loop
function anagrams1(stringA, stringB) {
  let [a, b] = [
    stringA.replace(/\W/g, "").toLowerCase(),
    stringB.replace(/\W/g, "").toLowerCase()
  ];

  if (a.length !== b.length) return false;
  for (let char of a) {
    b = b.replace(char, "");
  }

  return !b;
}

// Using charMap and helper function
function anagrams2(stringA, stringB) {
  const helper = str => {
    const charMap = {};
    for (let char of str.replace(/[\W]/g).toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  };

  const aCharMap = helper(stringA);
  const bCharMap = helper(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) return false;
  }
  return true;
}
