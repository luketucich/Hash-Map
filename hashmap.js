import LinkedList from "./linkedlist.js";

class HashMap {
  constructor() {
    this.buckets = [];
    this.bucketsLen = 16;
    this.loadFactor = 0.75;
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
    const index = this.hash(key);
    const buckets = this.buckets;

    return buckets[index] == undefined
      ? null
      : buckets[index].valueAt(buckets[index].findKey(key));
  }
}

const map = new HashMap();
map.set("loop", "VALUE1");
console.log(map.buckets[map.hash("loop")].toString());
map.set("fruit", "VALUE1");
console.log(map.buckets[map.hash("loop")].toString());
map.set("fruit", "VALUE2");
console.log(map.buckets[map.hash("loop")].toString());
console.log(map.get("asdfasdf"));
