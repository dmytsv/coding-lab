class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return ++this.size;
  }

  pop() {
    if (!this.head) return null;

    const first = this.head;
    if (!first.next) {
      this.head = null;
    } else {
      this.head = first.next;
      first.next = null;
    }

    this.size--;
    return first.data;
  }
}
