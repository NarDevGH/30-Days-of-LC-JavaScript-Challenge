/*
* Given a function fn and a time in milliseconds t, return a throttled version of that function.
* For instance, t = 50ms, and the function was called at 30ms, 40ms, and 60ms. 
*The first function call would block calling functions for the following t milliseconds.
*The second function call would save arguments, and the third call arguments should overwrite currently stored arguments from the
*second call because the second and third calls are called before 80ms. Once the delay has passed, 
*the throttled function should be called with the latest arguments provided during the delay period, 
*and it should also create another delay period of 80ms + t.
*/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function (fn, t) {
    let interval;
    let nextArgs;
    return function (...args) {
        if (interval) {
            nextArgs = args;
        }
        else {
            fn(...args);
            interval = setInterval(() => {
                if (nextArgs) {
                    fn(...nextArgs)
                    nextArgs = null;
                }
                else {
                    clearInterval(interval);
                    interval = null;
                }
            }, t);
        }
    }
};

const throttled = throttle(console.log, 100);
throttled("log"); // logged immediately.
throttled("log"); // logged at t=100ms.