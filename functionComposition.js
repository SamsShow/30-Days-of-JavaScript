// Approach

// To do the function composition, it uses the reduce method on the 
// array of functions. The initial value for the accumulator is x, 
// the argument passed to the new function returned by compose. 
// The reduce method then applies each function in the array to 
// the accumulator in turn, returning the final result.
// 
// Also the compose function applies the array of functions from 
// right to left, where the last function in the array is applied 
// first and the first function is applied last.

//  This is because the output of the last function in the array is 
//  the input for the second to last function, and so on, until the 
//  first function is applied to the original input.
//  This order of function application is consistent with the definition 
//  of function composition, where the innermost function is applied first.


/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // Return a new function that takes an input
	return function(x) {
        // Use the "reduceRight" method to apply the functions in the array from right to left
        return functions.reduceRight(function(acc, currentFunction) {
            // Call each function with the accumulator as its input
            return currentFunction(acc);
        },x);
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Using Arrow Function
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return x => functions.reduceRight((acc,f)=>f(acc),x)
  };
  
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
*/