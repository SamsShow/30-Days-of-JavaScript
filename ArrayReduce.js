//Approach 1

// Using a loop and an accumulator variable:
// This approach involves initializing an accumulator variable 
// to the initial value, and then looping through each element in 
// the array, applying the reducer function to the current accumulator 
// value and the current element, and updating the accumulator with the 
// result.
// 
// The final value of the accumulator is returned as the output.

var reduce = function(nums, fn, init) {
    let acc = init;
    for (let i = 0; i < nums.length; i++) {
      acc = fn(acc, nums[i]);
    }
    return acc;
};

// Approach 2
// Using Array.forEach():
// This approach uses the Array.forEach() method to loop through 
// each element in the array and apply the reducer function to 
// the current accumulator value and the current element.

// The final value of the accumulator is returned as the output.

var reduce = function(nums, fn, init) {
    let acc = init;
    nums.forEach((element) => {
      acc = fn(acc, element);
    });
    return acc;
};

//Approach 3
// Using Array.reduce:
// This approach uses the built-in Array.reduce() method to 
// process each element of the array and update the accumulator variable.

var reduce = function(nums, fn, init) {
    return nums.reduce((acc, element) => fn(acc, element), init);
  };