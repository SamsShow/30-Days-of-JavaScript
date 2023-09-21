// A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.

// Intuition and Approach:
// debounce takes two arguments: fn and t.
// fn is the function that you want to debounce.
// t is the amount of time you want to wait before executing fn after the last time it was called.
// The debounce function returns a new function that takes any number of arguments (...args).
// Within the returned function, a timer is set using setTimeout. The timer is initially set to t milliseconds.
// Every time the returned function is called, the clearTimeout function is called to reset the timer to t milliseconds.
// Once the timer has elapsed without the returned function being called again, the timer's callback function is executed. The callback function calls fn with the arguments that were passed to the returned function.
// The debounce function returns the new function that was created in step 2.

// In simpler terms, the debounce function creates a new function that can only be executed after a certain amount of time has passed without it being called again. This is achieved by creating a timer that is reset every time the debounced function is called. Once the timer has elapsed without the debounced function being called again, the function is executed. This is useful when you want to limit the frequency of some expensive operation, such as making an HTTP request or rendering a large number of elements on a page.

var debounce = function(fn, t) {
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args),t);
    }
};


