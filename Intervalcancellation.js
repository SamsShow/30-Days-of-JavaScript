// When setInterval is called, it schedules the first execution of the specified function 
// after the initial delay. Subsequent executions will occur repeatedly based on the 
// specified delay.

// Approach 1: Using setInterval & clearInterval
// To set an interval timer, we use the setInterval function. In the code snippet below, setInterval will repeatedly call () => fn(...args) every t milliseconds. It's important to note that setInterval does not immediately call the function before t milliseconds, which is why we manually call fn(...args) once before setting the interval.

// Next, we define a function called cancelFn that clears the interval when it's called. We return cancelFn from the main function. It's worth mentioning that cancelFn is not called when our cancellable function is initially defined. However, whenever the cancellable function is called, it returns cancelFn. The cancelFn can then be called at a later time to clear the interval.

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    // The clearInterval function is used to cancel a timed, repeating action that was previously established by a call to setInterval. It takes the interval ID returned by setInterval as an argument.

    return cancelFn;
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 35, cancelT = 190
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start)
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *   
 *  setTimeout(() => {
 *    console.log(result)  // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":35,"returned":8},
 *                         //      {"time":70,"returned":8},           
 *                         //      {"time":105,"returned":8},
 *                         //      {"time":140,"returned":8},
 *                         //      {"time":175,"returned":8}
 *                         //  ]
 *  }, cancelT + t + 15)    
 */


// What happens if the interval time (t) is set to a negative value or zero?
// It is going to execute immediately and continuously and will keep repeating for 0 or negative nums, potentially blocking the main thread and causing the browser to become unresponsive.

// Is it possible to restart or reschedule the interval after it has been canceled?
// While you can't directly restart a canceled interval, you can create a new interval by calling setInterval again with the desired interval time and the function to be executed.