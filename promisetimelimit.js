// Approach 1: Call Function Inside New Promise
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
