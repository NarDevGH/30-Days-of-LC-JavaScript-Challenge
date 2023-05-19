/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, 
the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. 
Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/

var TimeLimitedCache = function () {
    this.keyValuePairs = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let keyExists = false;
    if (this.keyValuePairs[key] && this.keyValuePairs[key].timer) {
        clearTimeout(this.keyValuePairs[key].timer);
        this.keyValuePairs[key].value = value;
        this.keyValuePairs[key].timer = setTimeout(() => {
            delete this.keyValuePairs[key];
        }, duration);
        keyExists = true;
    }
    else {
        this.keyValuePairs[key] = {
            value: value,
            timer: setTimeout(() => {
                delete this.keyValuePairs[key];
            }, duration)
        }
    }
    return keyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    let value;
    if (this.keyValuePairs[key] && this.keyValuePairs[key].timer) {
        value = this.keyValuePairs[key].value
    }
    else {
        value = -1;
    }
    return value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return Object.keys(this.keyValuePairs).length;
};