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
    const occupiedBucket = buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .find((ele) => ele.getValue(key)); // Check if any linked list has the key
    return occupiedBucket ? occupiedBucket.getValue(key) : null;
  }

  has(key) {
    const buckets = this.buckets;
    const occupiedBucket = buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .some((ele) => ele.containsKey(key)); // Check if any linked list has the key
    return occupiedBucket ? true : false;
  }

  remove(key) {
    const buckets = this.buckets;
    const occupiedBucket = buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .find((ele) => ele.getValue(key)); // Check if any linked list has the key

    if (occupiedBucket) {
      const keyIndex = occupiedBucket.findKey(key);
      occupiedBucket.removeAt(keyIndex);
      return true;
    } else {
      return false;
    }
  }

  length() {
    const buckets = this.buckets;
    let entries = 0;

    buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .forEach((ele) => {
        // Update entries size
        entries += ele.size();
      });

    return entries;
  }

  clear() {
    this.buckets = [];
    this.capacity = 16;
  }

  keys() {
    const buckets = this.buckets;
    let keyEntries = [];

    buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .forEach((ele) => {
        // Add each key to keyEntries
        keyEntries = keyEntries.concat(ele.getKeys());
      });

    return keyEntries;
  }

  values() {
    const buckets = this.buckets;
    let valueEntries = [];

    buckets
      .filter((ele) => ele !== null) // Filter buckets that are not empty
      .forEach((ele) => {
        // Add each value to valueEntries
        valueEntries = valueEntries.concat(ele.getValues());
      });

    return valueEntries;
  }

  entries() {
    const entries = [];
    const keyEntries = this.keys();
    const valueEntries = this.values();

    for (const entry in keyEntries) {
      entries.push([keyEntries[entry], valueEntries[entry]]);
    }
    return entries;
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

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
