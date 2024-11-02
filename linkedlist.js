import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
    this.listSize = 0;
  }

  // Add node to end of list
  append(value) {
    const node = new Node(value);

    if (this.listSize == 0) {
      this.headNode = node;
      this.tailNode = node;
      this.listSize++;
    } else if (this.listSize == 1) {
      this.headNode.nextNode = node;
      this.tailNode = node;
      this.listSize++;
    } else {
      this.tailNode.nextNode = node;
      this.tailNode = node;
      this.listSize++;
    }
  }

  prepend(value) {
    if (this.listSize == 0) {
      const node = new Node(value, null);

      this.headNode = node;
      this.tailNode = node;
      this.listSize++;
    } else if (this.listSize >= 1) {
      const node = new Node(value, this.headNode);

      this.headNode = node;
      this.listSize++;
    }
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.headNode.value;
  }

  tail() {
    return this.tailNode.value;
  }

  at(index) {
    if (index + 1 > this.listSize) {
      return "Index out of bounds";
    }

    let count = 0,
      currNode = this.headNode;

    while (count !== index) {
      currNode = currNode.nextNode;
      count++;
    }
    return currNode;
  }

  valueAt(index) {
    if (index + 1 > this.listSize) {
      return "Index out of bounds";
    }

    let count = 0,
      currNode = this.headNode;

    while (count !== index) {
      currNode = currNode.nextNode;
      count++;
    }
    return currNode.value[1];
  }

  insertAt(value, index) {
    if (index == 0) {
      this.prepend(value);
    } else if (index == this.listSize) {
      this.append(value);
    } else if (index > this.listSize) {
      return "Index out of bounds";
    } else {
      const currNodeBeforeValue = this.at(index - 1);
      const currNodeAtValue = this.at(index);

      const node = new Node(value, currNodeAtValue);
      currNodeBeforeValue.nextNode = node;
      this.listSize++;
    }
  }

  removeAt(index) {
    if (index == 0) {
      this.headNode = this.headNode.nextNode;
      this.listSize--;
    } else if (index == this.listSize - 1) {
      this.pop();
    } else if (index > this.listSize - 1) {
      return "Index out of bounds";
    } else {
      const currNodeBeforeValue = this.at(index - 1);
      const currNodeAfterValue = this.at(index + 1);

      currNodeBeforeValue.nextNode = currNodeAfterValue;
      this.listSize--;
    }
  }

  pop() {
    this.tailNode = this.at(this.listSize - 2);
    this.tailNode.nextNode = null;
    this.listSize--;
  }

  contains(value) {
    let currNode = this.headNode;

    while (currNode.value !== value && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }
    return currNode.value === value ? true : false;
  }

  containsKey(key) {
    let currNode = this.headNode;

    while (currNode.value[0] !== key && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }
    return currNode.value[0] === key ? true : false;
  }

  getValue(key) {
    let currNode = this.headNode;

    while (currNode.value[0] !== key && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
    }
    return currNode.value[0] === key ? currNode.value[1] : null;
  }

  find(value) {
    let count = 0,
      currNode = this.headNode;

    while (currNode.value !== value && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
      count++;
    }
    return currNode.value === value ? count : -1;
  }

  findKey(key) {
    let count = 0,
      currNode = this.headNode;

    while (currNode.value[0] !== key && currNode.nextNode !== null) {
      currNode = currNode.nextNode;
      count++;
    }
    return currNode.value[0] === key ? count : null;
  }

  toString() {
    let listString = "",
      currNode = this.headNode,
      count = 1;

    while (count <= this.listSize) {
      listString += `( ${currNode.value} ) -> `;
      currNode = currNode.nextNode;
      count++;
    }
    return (listString += "null");
  }
}
