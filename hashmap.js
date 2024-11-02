import LinkedList from "./linkedlist.js";

class HashMap {
  constructor() {
    this.buckets = [];
    this.capacity = 16;
    this.loadFactor = 0.75;
  }

  hash(key) {
    const capacity = this.capacity;
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const buckets = this.buckets;

    // If bucket is empty, create a new Linked List
    if (buckets[index] === undefined) {
      buckets[index] = new LinkedList();
      buckets[index].append([key, value]);
      // Overwrite value if key already exists in bucket
    } else if (buckets[index].containsKey(key)) {
      const pairIndex = buckets[index].findKey(key);
      buckets[index].removeAt(pairIndex);
      buckets[index].insertAt([key, value], pairIndex);
      // Otherwise, simply append key-value pair
    } else {
      buckets[index].append([key, value]);
    }
  }

  get(key) {
    const buckets = this.buckets;
    const occupiedBuckets = buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .find((ele) => ele.getValue(key)); // Check if any linked list has the key
    return occupiedBuckets ? occupiedBuckets.getValue(key) : null;
  }

  has(key) {
    const buckets = this.buckets;
    const occupiedBuckets = buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .some((ele) => ele.containsKey(key)); // Check if any linked list has the key
    return occupiedBuckets ? true : false;
  }
}

const test = new HashMap();
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

console.log(test.get("lion"));
