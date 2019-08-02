/** Merge sort */
var merge = (ar1, ar2) => {
  return [
    ...ar1.reduce((arr, el) => {
      while (el > ar2[0]) {
        arr = [...arr, ar2.shift()];
      }
      return [...arr, el];
    }, []),
    ...ar2,
  ];
};

var mSort = arr => {
  if (arr.length < 2) return arr;
  return merge(mSort(arr.splice(Math.floor(arr.length / 2))), mSort(arr));
};

/** Quick sort */
var qSort = ([mid, ...rest]) => {
  if (!rest.length) return mid === undefined ? [] : [mid];

  const left = [];
  let leftInd = 0;
  const right = [];
  let rightInd = 0;
  for (let el of rest) {
    if (el < mid) {
      left[leftInd++] = el;
    } else {
      right[rightInd++] = el;
    }
  }
  return [...qSort(left), mid, ...qSort(right)];
};
