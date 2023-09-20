// 1. The TimeLimitedCache constructor function initializes a new instance of the cache. It creates an empty cache object as a property of the instance.

// 2. The set method is used to set a key-value pair in the cache with a specified duration. It takes three parameters: key, value, and duration. Here's how it works:
// First, it checks if the key already exists in the cache and has an active timer by checking this.cache[key] && this.cache[key].timer. If it does, it means that the key already exists and is not expired.
// If the key exists, the existing timer is cleared using clearTimeout(this.cache[key].timer). This prevents the old timer from expiring and removes the associated timeout.
// Then, the value is updated by assigning this.cache[key].value = value.
// Next, a new timer is set using setTimeout to remove the key after the specified duration. The setTimeout function takes a callback function that removes the key from the cache when called. The timer ID is stored as this.cache[key].timer.
// Finally, true is returned to indicate that the key already existed and was updated.
// If the key does not exist in the cache or has an expired timer, it creates a new entry in the cache with the specified value. It sets a new expiration timer as before. Then, it returns false to indicate that a new key-value pair was added to the cache.

// 3.The get method is used to retrieve the value associated with a key from the cache. It takes one parameter: key. Here's how it works:
// It first checks if the key exists in the cache and has an active timer by checking this.cache[key] && this.cache[key].timer. If it does, it means that the key exists and is not expired.
// If the key is valid, it returns the associated value by accessing this.cache[key].value.
// If the key does not exist in the cache or has an expired timer, it returns -1 to indicate that the key is not accessible.


// 4.The count method is used to count the number of unexpired keys in the cache. It iterates over the cache object and counts the number of entries that have an active timer. Here's how it works:
// It initializes a count variable to 0.
// It iterates over each key in the cache object using a for...in loop.
// For each key, it checks if the key has an active timer by checking this.cache[key].timer. If it does, it increments the count by 1.
// After iterating over all keys, it returns the final count.


// 5.The remove method is used internally to remove expired keys from the cache when their timers expire. It takes one parameter: key. Here's how it works:
// It deletes the key from the cache object by using the delete operator: delete this.cache[key].



var TimeLimitedCache = function() {
    this.cache = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  if (this.cache[key] && this.cache[key].timer) {
    clearTimeout(this.cache[key].timer);
    this.cache[key].value = value;
    this.cache[key].timer = setTimeout(() => {
      this.remove(key);
    }, duration);
    return true;
  } else {
    this.cache[key] = {
      value: value,
      timer: setTimeout(() => {
        this.remove(key);
      }, duration)
    };
    return false;
  }
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
  if (this.cache[key] && this.cache[key].timer) {
    return this.cache[key].value;
  } else {
    return -1;
  }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  let count = 0;
  for (const key in this.cache) {
    if (this.cache[key].timer) {
      count++;
    }
  }
  return count;
};

TimeLimitedCache.prototype.remove = function(key) {
  delete this.cache[key];
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */