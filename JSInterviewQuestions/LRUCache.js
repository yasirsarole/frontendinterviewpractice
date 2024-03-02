// LRU(Least recently used) cache
// It contains max number of keys(size of the cache) from top to bottom, last of which is recently used
// If we add a new key and max number of keys(size of the cache) allowed is fulfilled then first key would be removed
// If we access the key then it should move to the last  because it was recently used

// name: 'Yasir'
// age: '28'
// profession: 'SDE'
// Hobbies: 'Youtube'
// location: 'Mumbai'

class LRU {
  constructor(max = 5) {
    this.max = max;
    this.cache = new Map();
  }

  get(key) {
    let item = this.cache.get(key);

    // if item is present move it to the last because it is recently used
    // LRU will always be on the top
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }

    return item;
  }

  set(key, value) {
    if (this.cache.has(key)) {
      // if key is already present then delete the key
      this.cache.delete(key);
    } else if (this.cache.size === this.max) {
      // if size is full then remove the first element from cache
      this.cache.delete(this.first());
    }
    this.cache.set(key, value);
  }

  //   get the first value of cache
  first() {
    return this.cache.keys().next().value;
  }
}

const lrucache = new LRU(3);
lrucache.set("name", "yasir");
lrucache.set("age", "28");
lrucache.set("profession", "youtube");
console.log(lrucache.cache);
lrucache.get("name");
console.log(lrucache.cache);
lrucache.set("location", "Mumbai");
console.log(lrucache.cache);
