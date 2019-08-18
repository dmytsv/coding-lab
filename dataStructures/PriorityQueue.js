class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }

  enqueue(data, priority) {
    let { length: index } = this.values;
    this.values[index] = new Node(data, priority);
    let parentIndex = Math.floor((index - 1) / 2);
    while (parentIndex >= 0 && this.values[index].priority > this.values[parentIndex].priority) {
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this;
  }

  dequeue() {
    if (this.values.length <= 1) return this.values.pop();
    const max = this.values[0];
    this.values[0] = this.values.pop();

    let currentIndex = 0;
    let left = currentIndex * 2 + 1;
    let right = currentIndex * 2 + 2;
    const swap = (ind1, ind2) =>
      ([this.values[ind1], this.values[ind2]] = [this.values[ind2], this.values[ind1]]);

    while (
      (this.values[left] && this.values[left].priority > this.values[currentIndex].priority) ||
      (this.values[right] && this.values[right].priority > this.values[currentIndex].priority)
    ) {
      if (this.values[right] && this.values[right].priority > this.values[left].priority) {
        swap(right, currentIndex);
        currentIndex = right;
      } else {
        swap(left, currentIndex);
        currentIndex = left;
      }
      left = currentIndex * 2 + 1;
      right = currentIndex * 2 + 2;
    }
    return max;
  }
}
