/**
 * Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
 * If there are no elements in the array, it should return -1.
 */

Array.prototype.last = function () {
    let keysAmmount = Object.keys(this).length;
    if (keysAmmount > 0) {
        return this[keysAmmount - 1];
    }
    else {
        return -1;
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */