class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }

  insert(data) {
    let { length: index } = this.values;
    this.values[index] = data;
    let parentIndex = Math.floor((index - 1) / 2);
    while (parentIndex >= 0 && this.values[index] > this.values[parentIndex]) {
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }
}
