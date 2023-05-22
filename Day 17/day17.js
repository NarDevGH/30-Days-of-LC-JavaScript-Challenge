/**
* Given two objects o1 and o2, check if they are deeply equal.
* You may assume both objects are the output of JSON.parse. In other words, they are valid JSON.
* Please solve it without using lodash's _.isEqual() function.
*/


/**
*  Approach (by Vikas-Pathak-123)
* - Check the types of o1 and o2:
*  If they have different types, they are not deeply equal, so return false.
*  If they are primitive values or null, compare them directly and return the result.
*  If they are arrays, compare their lengths and recursively check if each element is deeply equal.
*  If they are objects, compare their keys and recursively check if the corresponding values are deeply equal.
* - For arrays, compare their lengths and iterate through each element to recursively check if they are deeply equal.
* - For objects, compare the lengths of their keys. Iterate through each key of o1 and check if the corresponding key exists in o2. If the key is not present or the associated values are not deeply equal, return false.
* - If all the comparisons pass, the objects are deeply equal, so return true.
*/

/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {
    if (typeof o1 !== typeof o2) {
        return false;
    }

    if (typeof o1 !== 'object' || o1 === null || o2 === null) {
        return o1 === o2;
    }

    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }

    if (Array.isArray(o1)) {
        if (o1.length !== o2.length) {
            return false;
        }

        for (var i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) {
                return false;
            }
        }

        return true;
    }

    var keys1 = Object.keys(o1);
    var keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (var key of keys1) {
        if (!keys2.includes(key) || !areDeeplyEqual(o1[key], o2[key])) {
            return false;
        }
    }

    return true;
};