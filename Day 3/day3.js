/*
 Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

 The three functions are:

 increment() increases the current value by 1 and then returns it.
 decrement() reduces the current value by 1 and then returns it.
 reset() sets the current value to init and then returns it.
*/

var createCounter = function (init) {
    let obj = {};
    obj["init"] = init;
    obj.value = init;
    obj.increment = () => ++obj.value;
    obj.decrement = () => --obj.value;
    obj.reset = () => {
        obj.value = obj.init;
        return obj.value;
    }
    return obj;
};

module.exports = createCounter;