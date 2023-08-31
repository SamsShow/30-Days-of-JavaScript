// The returned function uses a Closure to keep track of whether 
// fn has already been called. The usedOnce variable is initially 
// set to false, indicating that fn has not yet been called.

// When the returned function is called for the first time, 
// it sets usedOnce to true, calls fn with the input arguments args, 
// stores the result in the result variable, and returns the result.

// When the returned function is called subsequent times, it simply 
// returns undefined, since fn has already been called and its result 
// has been stored in result.

// The use of the rest parameter ...args allows the returned 
// function to accept any number of arguments, which are then passed 
// to fn.

// To be more clear, ...args represents the input arguments that are 
// passed to the returned function. The use of the spread syntax allows 
// the function to accept any number of input arguments, which are then 
// passed as an array to the fn function using the spread syntax ...args.

// For example, if you call the returned function with myFunc(1, 2, 4), 
// the ...args syntax will convert the input arguments into an 
// array [1, 2, 4] that can be passed to the fn function using the 
// spread syntax ...args.

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let usedOnce = false;
    let result;

    return function(...args){
        if(!usedOnce){
            result = fn(...args);
            usedOnce = true;
            return result;
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
*/