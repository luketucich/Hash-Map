import LinkedList from "./linkedlist.js";

class HashMap {
  constructor() {
    this.buckets = [];
    this.bucketsLen = 16;
  }

  hash(key) {
    const bucketsLen = this.bucketsLen;
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % bucketsLen;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const buckets = this.buckets;

    if (buckets[index] === undefined) {
      console.log("ADDED");
      buckets[index] = new LinkedList();
      buckets[index].append([key, value]);
    } else if (buckets[index].containsKey(key)) {
      const pairIndex = buckets[index].findKey(key);
      buckets[index].removeAt(pairIndex);
      buckets[index].insertAt([key, value], pairIndex);
    }
  }
}
