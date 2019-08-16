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

  extractMax() {
    const max = this.values[0];
    this.values[0] = this.values.pop();
    let currentIndex = 0;
    let left = currentIndex * 2 + 1;
    let right = currentIndex * 2 + 2;
    while (
      this.values[left] > this.values[currentIndex] ||
      this.values[right] > this.values[currentIndex]
    ) {
      if (this.values[left] >= this.values[right]) {
        [this.values[left], this.values[currentIndex]] = [
          this.values[currentIndex],
          this.values[left],
        ];
        currentIndex = left;
      } else {
        [this.values[right], this.values[currentIndex]] = [
          this.values[currentIndex],
          this.values[right],
        ];
        currentIndex = right;
      }
      left = currentIndex * 2 + 1;
      right = currentIndex * 2 + 2;
    }
    return max;
  }
}
