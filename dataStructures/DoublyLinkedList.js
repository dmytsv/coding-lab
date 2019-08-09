class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node.data;
      node = node.next;
    }
  }

  push(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.tail) return null;

    const last = this.tail;
    if (!last.prev) {
      this.tail = null;
      this.head = null;
    } else {
      const penultimate = last.prev;
      last.prev = null;
      penultimate.next = null;
      this.tail = penultimate;
    }

    this.length--;
    return last;
  }

  shift() {
    if (!this.head) return null;

    const first = this.head;
    if (first === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      const second = first.next;
      this.head = second;
      first.next = null;
      second.prev = null;
    }
    this.length--;
    return first;
  }
  unshift(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this;
  }

  // vvv continue here vvv
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let currentIndex = 0;
    let currentNode = this.head;
    while (index !== currentIndex) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }

  set(index, data) {
    if (index < 0 || index > this.length) throw `Index ${index} does not exist.`;

    const node = this.get(index);
    node.data = data;

    return node;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) throw `Index ${index} does not exist.`;
    if (index === 0) return this.unshift(data);
    if (index === this.length) return this.push(data);

    const node = new Node(data);
    const previousNode = this.get(index - 1);
    const nextNode = previousNode.next;

    previousNode.next = node;
    node.next = nextNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index > this.length) throw `Index ${index} does not exist.`;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    const previousNode = this.get(index - 1);
    const node = previousNode.next;
    previousNode.next = node.next;

    return node;
  }

  reverse() {
    if (!this.head) return null;

    this.tail = this.head;
    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      const { next } = currentNode;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = next;
    }

    this.head = previousNode;

    return this;
  }
}
