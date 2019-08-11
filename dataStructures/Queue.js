class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.head) return null;

    const first = this.head;
    if (first === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = first.next;
    }

    first.next = null;
    this.size--;
    return first.data;
  }
}
