const sort = require("./mergeSort");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = sort.mergeSort([...new Set(array)]);

    this.root = this.buildTree(this.array);
  }

  buildTree(array) {
    if (array.length === 0) {
      return null;
    }

    const mid = Math.floor(array.length / 2);

    const root = new Node(array[mid]);
    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));

    return root;
  }

  delete(value, node = this.root) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minNode = this.findMin(node.right);
        node.value = minNode.value;
        node.right = this.delete(minNode.value, node.right);
      }
    }
    return node;
  }

  insert(value, node = this.root) {
    if (this.root == null) {
      this.root = new Node(value);
      return;
    }

    if (node === null) {
      return new Node(value);
    }

    if (value < node.value) {
      node.left = this.insert(value, node.left);
    } else if (value > node.value) {
      node.right = this.insert(value, node.right);
    }

    return node;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  find(value, node = this.root) {
    if (node === null) return false;
    if (node.value === value) return true;

    if (value < node.value) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }

  levelOrder(callback) {
    if (this.root === null) return;

    const queue = [this.root];

    while (queue.length > 0) {
      console.log(queue);
      const currentNode = queue.shift();
      callback(currentNode);

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }

  inOrder(callback, node = this.root) {
    if (node === null) return;
    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  preOrder(callback, node = this.root) {
    if (node === null) return;
    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  postOrder(callback, node = this.root) {
    if (node === null) return;
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
    callback(node);
  }

  height(node = this.root) {
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  depth(value, current = this.root, depth = 0) {
    if (current === null) return -1;
    if (current.value === value) return depth;

    const leftDepth = this.depth(value, current.left, depth + 1);
    if (leftDepth !== -1) return leftDepth;

    return this.depth(value, current.right, depth + 1);
  }

  isBalanced(node = this.root) {
    function checkHeight(node) {
      if (node === null) return 0;

      const leftHeight = checkHeight(node.left);
      const rightHeight = checkHeight(node.right);

      if (leftHeight === -1 || rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      return Math.max(leftHeight, rightHeight) + 1;
    }
    return checkHeight(node) !== -1;
  }

  balance() {
    if (this.root === null) return;

    const sortedValues = [];

    function inOrder(node) {
      if (node === null) return;

      inOrder(node.left);
      sortedValues.push(node.value);
      inOrder(node.right);
    }
    inOrder(this.root);

    this.root = this.buildTree(sortedValues);
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

let arr = [
  674, 500, 715, 453, 277, 51, 994, 373, 112, 908, 759, 12, 303, 916, 763, 268,
  81, 456, 422, 451, 441, 50, 632, 486, 156, 322, 864, 76, 504, 4, 642, 958,
  404, 908, 733, 590, 382, 205, 373, 437, 258, 756, 123, 375, 834, 387, 147,
  545, 280, 416, 253, 394, 835, 633, 51, 214, 147, 711, 352, 257, 434, 313, 846,
  883, 491, 740, 284, 337, 811, 587, 763, 30, 524, 294, 38, 776, 414, 496, 834,
  457, 27, 834, 661, 884, 941, 763, 450, 603, 316, 224, 918, 13, 892, 479, 200,
  147, 785, 85, 512, 38,
];

const binaryTree = new Tree(arr);
