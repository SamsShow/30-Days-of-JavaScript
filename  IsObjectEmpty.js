// JSON:
// JSON (JavaScript Object Notation) is a popular data-interchange format that serves as a lightweight alternative to XML. It is widely used for transmitting and storing data in a structured format.
// JSON consists of two main data structures: objects and arrays. The data is represented as a combination of key-value pairs, enclosed in curly braces {} for objects, and square brackets [] for arrays. The keys in an object must be strings, while the values can be any valid JSON data type, including objects and arrays.

// JSON.parse():
// JSON.parse() is a built-in JavaScript function that converts a JSON string into a JavaScript object, arrayor a primitive value (such as a string, number, boolean, or null). It takes a valid JSON string as input and returns a corresponding JavaScript object, array or primitive value. This allows developers to work with JSON data in a native JavaScript format.

// Example of using JSON.parse():

/*
const jsonString = '{"name":"Pavitr Prabhakar","age"17,"city":"Mumbattan"}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Output: Pavitr Prabhakar
console.log(parsedObject.age); // Output: 17
console.log(parsedObject.city); // Output: Mumbattan
*/

// Objects in JavaScript:
// Objects are used to store collections of key-value 
// pairs. The keys of an object can be any value that 
// can be converted to a string, and the corresponding 
// values can be of any data type, including objects and 
// arrays.

// For arrays, the length property returns the highest 
// numeric index plus one. For objects, the length 
// property is not available, so we need to use other 
// methods like Object.keys() to get the number of 
// key-value pairs.

// Approaches:
// 1) The first way is to use JSON.stringify to convert the input array/object to a string. If the array or object is empty, it returns a string with opening and closing braces or curly braces.

// 2)The second approach is to use Object.keys() as suggested above to obtain the length and then verify if it is empty or not.

// 3)he third approach is to just use a for loop iterator to check whether there is something to iterate, and if there is, it implies the object is not empty, and if there is nothing to iterate, it implies the object is empty.

// Approach 1: Using JSON.stringify
// When you stringify an object using JSON.stringify(), the resulting JSON string will represent the object's key-value pairs as a string. In this context, the "length" property of the resulting string will represent the number of characters in the string, not the number of key-value pairs in the original object.

/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (JSON.stringify(obj).length <= 2) return true
    else return false
};

// Approach 2: Using Object.keys
// We can check the length of the keys using Object.keys() and if it's 0 then return true else false.

var isEmpty = function(obj) {
    return Object.keys(obj).length === 0
};


// Approach 3: Using loop
// If the array/object is not empty, the interpreter will enter the for-in loop, and therefore the first return statement false will be run and if it is empty, the interpreter will not enter the for-in loop, and so the second return statement true will be executed.

var isEmpty = function(obj) {
    for (const _ in obj) return false;
    return true;
};