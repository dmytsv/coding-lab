class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Anabling [...bst] and {...bst} syntax
  *[Symbol.iterator]() {
    function* buildTree(node) {
      if (!node) return;
      // yielding smaller values
      if (node.left) {
        yield* buildTree(node.left);
      }
      // yielding current value
      yield node.data;
      // yielding bigger values
      if (node.right) {
        yield* buildTree(node.right);
      }
    }
    yield* buildTree(this.root);
  }

  insert(data) {
    if (!this.root) {
      this.root = new Node(data);
      return this;
    }

    const traverse = (currentNode, data) => {
      if (currentNode.data === data) {
        // do nothing
      } else if (currentNode.data > data) {
        currentNode.left && traverse(currentNode.left, data);
        !currentNode.left && (currentNode.left = new Node(data));
      } else {
        currentNode.right && traverse(currentNode.right, data);
        !currentNode.right && (currentNode.right = new Node(data));
      }

      return this;
    };

    return traverse(this.root, data);
  }

  find(data) {
    const traverse = (currentNode, data) => {
      if (!currentNode) return false;
      if (currentNode.data === data) return true;

      return currentNode.data > data
        ? traverse(currentNode.left, data)
        : traverse(currentNode.right, data);
    };

    return traverse(this.root, data);
  }
}
