// Return a function after a specifc time only if you didn't call other function , if we called the other function then the first function shouldn't be called at all !!

// In Javascript controlling the flow and exceution of tasks , is quite crucial. The following 2 questions (Execute Cancellable function with delay) and (Interval Cnacellation) , posses a really really important concept 

// By using such methods , we can easily control timing and execution of a code , we can either delay or cancel them .

// we need clearTimeout to cancel the scheduled execution before the delay expires.

//  Approach:
// The code defines a function named "cancellable" that takes three parameters: "fn" (a function), "args" (an array of arguments), and "t" (a time delay in milliseconds).
// Inside the "cancellable" function, a nested function named "cancelFn" is defined. This function is responsible for canceling the execution of the scheduled function.
// The "cancelFn" function calls clearTimeout with the timer identifier to cancel the scheduled function execution.
// The setTimeout function is used to schedule the execution of a function, which is passed as the first parameter, after the specified time delay (t).
// The setTimeout function returns a timer identifier, which is stored in the "timer" variable.
// The scheduled function (fn) is executed using the spread operator (...args) to pass the arguments array to the function.
// Finally, the "cancelFn" function is returned from the "cancellable" function, allowing you to call it later to cancel the scheduled function if needed.

// The purpose of defining the "cancelFn" function at the top is to ensure that it is accessible within the scope of the "cancellable" function. This allows us to return the "cancelFn" function as part of the function's result, making it available for later use outside of the "cancellable" function. It's always a good practice to define functions at the top

//Solution 
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = function(fn, args, t) {
    // cancelFn function//
    const cancelFn = function (){
      clearTimeout(timer);
  };
  const timer = setTimeout(()=>{
      fn(...args)
  }, t);
  return cancelFn ;
};


/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const log = (...argsArr) => {
 *      result.push(fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(fn, args, t);
 *           
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, cancelT)
 */