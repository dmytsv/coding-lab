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
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mSort(left), mSort(right));
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

  const resetBuckets = () => buckets.forEach((e, ind) => (buckets[ind] = []));

  let haveNumbersToSort = true;
  let order = 1;
  while (haveNumbersToSort) {
    haveNumbersToSort = false;
    for (num of newArr) {
      let buckInd = Math.floor((num % 10 ** order) / 10 ** (order - 1));
      buckInd && (haveNumbersToSort = true);
      buckets[buckInd].push(num);
    }
    newArr = [].concat(...buckets);
    resetBuckets();
    order++;
  }
  return newArr;
};
