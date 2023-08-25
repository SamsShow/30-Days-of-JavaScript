// Array Map Method
// var map = function(arr, fn) {
    // return arr.map((element, index) => fn(element, index));
// };

// The Array.map() method is used to apply the provided fn function to 
// each element of the input arr array with its corresponding index, 
// and create a new array with the resulting transformed values.

// Also the Array.map() method automatically creates the new output 
// array and returns it, eliminating the need to manually create and 
// manage a new array as in other approaches.

// Using forEach() method
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const transformedArr = [];
    arr.forEach((element, index) => {
        transformedArr[index] = fn(element, index);
    });
    return transformedArr;
};