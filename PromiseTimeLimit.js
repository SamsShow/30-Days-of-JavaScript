
// Problem Summary:
// Given an asynchronous function fn and a time limit t in milliseconds, we need to create a new time-limited version of the input function.
// The time-limited function should behave identically to the original function, except that if it takes longer than t milliseconds to fulfill, it should reject with the string "Time Limit Exceeded".

// Intuition:
// We can use a combination of Promise, setTimeout, and async/await to implement the time-limited function. By setting a timeout using setTimeout, we can enforce the time limit and reject the promise if it exceeds the specified duration.

// Approach:
// Create a wrapper function that takes the original function fn and the time limit t as parameters.
// Within the wrapper function, return an async function that accepts any number of arguments using the spread operator ...args.
// Inside the async function, create a new Promise to handle the asynchronous execution.
// Use setTimeout to set a timer with the time limit t. If the timer expires before the promise is resolved, reject the promise with the string "Time Limit Exceeded".
// Call the original function fn with the provided arguments ...args and await its completion.
// If the function completes before the time limit, resolve the promise with the result.
// Return the promise from the async function.



/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = (fn, t) => {
	return async(...args) => {
        const originalFnPromise = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};

/**
 *  * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Approach 2: Call Function Inside New Promise
// We can create a new Promise that resolves as soon as the passed function resolves 
// or rejects. This essentially emulates the passed function without effecting it at all. 
// To satisfy the requirement, all we have to do is add a setTimeout which can force the 
// promise to reject prematurely.

var timeLimit = function(fn, t) {
    return async function(...args) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
        fn(...args).then(resolve).catch(reject);
      })
    }
};
