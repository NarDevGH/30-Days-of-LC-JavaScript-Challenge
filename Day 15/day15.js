/*
Given a function fn and a time in milliseconds t, return a debounced version of that function.

For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. 
The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. 
If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.
*/

var debounce = function (fn, t) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            //fn(args); X
            //The apply() method calls the specified function with a given this value, and arguments provided as an array
            fn.apply(this, args);
        }, t);
    };
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms

