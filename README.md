# HashMap 🗝️

A practical JavaScript implementation of a HashMap data structure, with essential operations for managing and manipulating key-value pairs.

## What is a HashMap?

- It's a way to store data where you use keys to look up values, making data retrieval, insertion, and deletion super efficient.

## Key Takeaways

Developing this HashMap helped me understand hash tables better. Here are some highlights:

- **Dynamic Data Handling:** The HashMap grows and shrinks as needed to stay efficient.

- **Core Operations:** It includes essential methods like `set`, `get`, `remove`, and `has` to manage key-value pairs.

- **Collision Handling:** Uses a linked list to handle situations where multiple values land in the same bucket.

- **Resizing Mechanism:** Automatically resizes buckets to maintain performance when it reaches a certain load factor.

- **Code Modularity:** Uses classes for clear organization and reusability.

- **Performance Considerations:** Optimized for efficient key-value storage and retrieval, especially during resizing operations.

- **Array Methods Utilized:** Made good use of JavaScript's array methods to keep things smooth:
  - `filter` to select non-empty buckets.
  - `forEach` to iterate over buckets and perform operations.
  - `map` to transform data, like creating arrays of keys or values.
  - `concat` to merge arrays of keys or values from different buckets.
  - `some` to check if at least one element meets a condition (e.g., if a key exists in any bucket).
  - `find` to locate an element that meets certain criteria (e.g., finding a key's value in a bucket).

Overall, this project was a great way to enhance my skills in data structures and JavaScript.

## Usage Example:

```javascript
const map = new HashMap();

// Set key-value pairs
map.set('lion', 'king of the jungle');
map.set('elephant', 'largest land animal');
map.set('cheetah', 'fastest land animal');

// Retrieve a value by key
console.log(map.get('lion')); // Output: king of the jungle

// Check if a key exists
console.log(map.has('elephant')); // Output: true
console.log(map.has('giraffe')); // Output: false

// Remove a key-value pair
map.remove('cheetah');
console.log(map.get('cheetah')); // Output: null

// Get all keys
console.log(map.keys()); // Output: ['lion', 'elephant']

// Get all values
console.log(map.values()); // Output: ['king of the jungle', 'largest land animal']

// Get all entries
console.log(map.entries()); // Output: [['lion', 'king of the jungle'], ['elephant', 'largest land animal']]

// Get the number of entries in the HashMap
console.log(map.length()); // Output: 2

// Clear the HashMap
map.clear();
console.log(map.length()); // Output: 0
