class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head == null) {
      this.head = newNode;
    } else if (this.tail == null) {
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  size() {
    let total = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      total += 1;
      currentNode = currentNode.next;
    }
    return total;
  }

  at(index) {
    let currentNode = this.head;

    while (index > 0 && currentNode !== null) {
      index -= 1;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  pop() {
    if (this.size() <= 1) {
      this.head = null;
      return null;
    }

    let currentNode = this.head;

    while (currentNode.next != this.tail) {
      currentNode = currentNode.next;
    }

    tailNode = currentNode.next;
    currentNode.next = null;
    this.tail = this.size() == 1 ? null : currentNode;

    return tailNode;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.next;
      index += 1;
    }

    return null;
  }

  toString(node = this.head) {
    let currentNode = node;

    return currentNode === null
      ? `null`
      : `( ${currentNode.value} ) -> ${this.toString(
          (node = currentNode.next)
        )}`;
  }

  insertAt(value, index) {
    if (index == 0) {
      return this.prepend(value);
    }

    let currentNode = this.head;

    while (index > 1 && currentNode.next !== null) {
      currentNode = currentNode.next;
      index -= 1;
    }

    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    return newNode;
  }

  removeAt(index) {
    if (index == 0) {
      let removedNode = this.head;
      this.head = this.head.next;
      return removedNode.value;
    }

    let currentNode = this.head;

    while (index > 1) {
      currentNode = currentNode.next;
      if (currentNode.next === null) return null;
      index -= 1;
    }

    let removedNode = currentNode.next;
    currentNode.next = removedNode.next;
    return removedNode.value;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());
