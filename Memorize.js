// Approach

// Define a function called memoize that takes in a function fn as its parameter.
 
// Create an empty object called cache to store previously computed results.
 
// Return a new function that takes in any number of arguments using the spread syntax.
 
// Use JSON.stringify() to convert the arguments into a string to use as a key for the cache object
 
// Check if the key already exists in the cache object. If it does, return the cached value.

// If the key doesn't exist in the cache, call the original function fn using apply() to pass the arguments and store the result in the cache object using the key as the property name.

// Finally, return the computed result.

/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);

        if(key in cache){
            return cache[key]
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 **/