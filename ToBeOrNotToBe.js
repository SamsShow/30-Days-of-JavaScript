/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: (val2) => {
            if(val !== val2) throw new Error ("Not Equal")
            else return true;
        },
        notToBe: (val2) => {
            if(val === val2) throw new Error ("Equal")
            else return true;
        },
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


//what does the input expect(5).toBe(15); means.
//it means give 5 as input to function named expect but give 15 as input to function named toBe which is present inside function expect. now you can understand any solution of this problem.

//now look at the code carefully it returning an object.
//inside that object there is two functions defined.
//which function will be called depends on input.