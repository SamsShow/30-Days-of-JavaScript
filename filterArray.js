// So What are truthy and falsy value??
// 
// In JavaScript, the following values are considered falsy:
	// false
	// 0
	// -0
	// 0n (BigInt zero)
	// '' (empty string)
	// null
	// undefined
	// NaN

// All other values are considered truthy, including:*
	// '0' (string containing a single zero)
	// 'false' (string containing the word "false")
	// [] (empty array)
	// {} (empty object)
	// function() {} (empty function)



// Approach 1: Using a for loop and Array.push

// One way to solve this problem is to iterate through the input array 
// using a for loop, and for each element, call the filtering function 
// with two arguments - the element itself and its index.
// If the filtering function returns a truthy value, add the element 
// to a result array using the push method.

var filter = function(arr, fn) {
    const result = [];
    for(let i =0;i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
}

// Approach 2: Using Array.reduce

// Another way to solve this problem is to use the Array.reduce method. 
// We can use Array.reduce to accumulate the elements that satisfy the 
// filtering function into a new array.

var filter = function(arr, fn) {
    return arr.reduce((result, value, index) => {
      if (fn(value, index)) {
        result.push(value);
      }
      return result;
    }, []);
};


// Approach 3: Using Array.forEach

// We can also solve this problem using the Array.forEach method. 
// We can use Array.forEach to iterate through the input array, and 
// for each element, call the filtering function with two 
// arguments - the element itself and its index.
// If the filtering function returns a truthy value, add the 
// element to a result array using the push method.

var filter = function(arr, fn) {
    const result = [];
    arr.forEach((value, index) => {
      if (fn(value, index)) {
        result.push(value);
      }
    });
    return result;
};
