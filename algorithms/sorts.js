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
  const right = [];
  let leftInd = 0;
  let rightInd = 0;

  for (let el of rest) {
    el < mid && (left[leftInd++] = el);
    el >= mid && (right[rightInd++] = el);
  }
  return [...qSort(left), mid, ...qSort(right)];
};

/** Radix sort */
var rSort = arr => {
  let newArr = [...arr];

  const buckets = [];
  for (let i = 0; i < 10; i++) {
    buckets[i] = [];
  }

  const refillArr = (target = []) => (
    buckets.forEach((e, ind) => ((target = [...target, ...e]), (buckets[ind] = []))), target
  );

  let haveNumbersToSort = true;
  let order = 1;
  while (haveNumbersToSort) {
    haveNumbersToSort = false;
    for (num of newArr) {
      let buckInd = Math.floor((num % 10 ** order) / 10 ** (order - 1));
      buckInd && (haveNumbersToSort = true);
      buckets[buckInd].push(num);
    }
    newArr = refillArr();
    order++;
  }
  return newArr;
};
