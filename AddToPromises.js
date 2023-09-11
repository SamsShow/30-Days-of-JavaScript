// Use Promise.all() method along with await to wait for both promises to resolve. Once they resolve, their values are retrieved and stored in the variables value1 and value2. Finally, a new promise is returned with the sum of value1 and value2.

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);
  
    // Return a new promise that resolves with the sum of the values
    return value1 + value2;
};
  
  // // Example usage:
  // var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
  // var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
  
  // addTwoPromises(promise1, promise2)
  //   .then(console.log); // Output: 7

// what promise.all basically does is that it takes a certain number of promises and returns only one promise.
// Here's it's syntax :
// Promise.all(array) .
// That's weird why do we have an array?
// Promise.all literally takes an array as it's parameters 