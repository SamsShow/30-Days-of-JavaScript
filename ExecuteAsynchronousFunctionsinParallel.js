// Working with Promises in JavaScript
// In our problem, we're dealing extensively with JavaScript Promises, a concept fundamental to asynchronous programming. A Promise in JavaScript represents a value that may not be immediately available but will be available in the future, or it will never be available due to an error. A Promise can be in one of three states: Pending, Fulfilled, or Rejected.

// In the context of our problem, understanding these states is crucial. We're dealing with a series of functions that each return a promise. We always create a new promise, and the state of this new promise depends on the states of the promises in the input array. If all promises from the array are fulfilled, our new promise resolves with all their values. If any promise from the array is rejected, our new promise rejects with the reason of the first rejected promise.

// Approach 1: Emulate the behavior of Promise.all()

// Intuition
// The aim is to replicate the functionality of JavaScript's built-in Promise.all() method. Specifically, we need to manage an array of promise-returning functions and return a promise that resolves to an array of results, retaining the order of the original array. We will handle the resolutions of the promises ourselves, using either the modern async/await syntax or the classic then/catch syntax.

// Algorithm
// Return a new promise from the promiseAll function.
// If the input array is empty, immediately resolve it with an empty array and return.
// Initialize an array res to hold the results, initially filled with null.
// Initialize a resolvedCount variable to track the number of promises that have been resolved.
// Iterate over the array of promise-returning functions. For each promise-returning function:
// In the async/await version, await the promise. Upon resolution, place the result in the corresponding position in the res array and increment the resolvedCount. If an error is thrown, immediately reject the promise with the error.
// In the then/catch version, attach a then clause and a catch clause. Upon resolution, the then clause places the result in the res array and increments resolvedCount. The catch clause rejects the promise with the error.
// If all promises have resolved (i.e., resolvedCount equals the length of the function array), it resolves the promiseAll() promise with the res array.

// The main difference between the async/await and then/catch versions lies in the syntax and the way the promises are awaited/handled, but the overall approach remains the same. Both implementations ensure that all promises are started concurrently (as opposed to sequentially), and the returned promise resolves with an array of their results, maintaining the original order.

var promiseAll = function(functions) {
    return new Promise((resolve,reject) => {
        if(functions.length === []) {
            resolve([])
            return
        }
        
        const res = new Array(functions.length).fill(null)

        let resolvedCount = 0

        functions.forEach((el,idx) => {
            el().then((subResult) => {
                res[idx] = subResult
                resolvedCount++
                if(resolvedCount === functions.length) {
                    resolve(res)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
};

// Approach 2:

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        // We know the resulting array will be the same length as functions
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i) => {
            fn()
            .then(val => {
                results[i] = val;
                count++;
                if(count === functions.length) resolve(results);
            })
            .catch(reason => reject(reason));
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Sources of error
// If your resulting array has the correct values, but the time elapsed is incorrect, then the code is probably being held up by await. Remember that the function will wait for the promise to resolve with the await keyword. A correct solution will run all the promises asynchronously, but will only resolve the resulting array after all promises have been resolved.

