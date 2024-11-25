class HashMap {
  constructor(size = 16) {
    this.table = new Array(size);
    this.size = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const hash = this.hash(key);
    const bucket = hash % this.table.length;

    if (!this.table[bucket]) {
      this.table[bucket] = [];
    }

    for (let pair of this.table[bucket]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    this.table[bucket].push([key, value]);
    this.size++;

    if (this.size / this.table.length > 0.75) {
      this.resize();
    }
  }

  get(key) {
    const hash = this.hash(key);
    const bucket = this.table[hash % this.table.length];

    if (!bucket) return undefined;

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
  }

  resize() {
    const oldTable = this.table;
    this.table = new Array(this.table.length * 2);
    this.size = 0;

    for (let bucket of oldTable) {
      if (bucket) {
        for (let [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  keys() {
    const arr = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          arr.push(pair[0]);
        }
      }
    }

    return arr;
  }

  values() {
    const arr = [];
    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          arr.push(pair[1]);
        }
      }
    }

    return arr;
  }

  entries() {
    const arr = [];

    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          arr.push(pair);
        }
      }
    }

    return arr;
  }

  has(key) {
    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          if (pair[0] === key) return true;
        }
      }
    }
    return false;
  }

  remove(key) {
    for (let bucket of this.table) {
      if (bucket) {
        for (let pair of bucket) {
          if (pair[0] === key) {
            bucket.pop(pair);
            return true;
          }
        }
      }
    }

    return false;
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
test.set("hat", "red");
// test.set("moon", "silver");

console.log(test.keys());
console.log(test.remove("hat"));
console.log(test.keys());
