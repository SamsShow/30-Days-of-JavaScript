// Why rest parameter ?
// Rest parameters in JavaScript allow us to represent an indefinite 
// number of arguments as an array within a function. It enables us to 
// handle multiple arguments without explicitly defining each one in the 
// function signature.
// 
// The rest parameter is denoted by three dots (...) followed by a 
// parameter name in a function declaration or function expression.

// Approach:

// As we know args is an array of arguments passed to a function. 
// We can use args.length to get the number of arguments passed to 
// a function.

// hence we will return args.length to get the number of arguments 
// passed to a function.

var argumentsLength = function(...args) {
 return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
