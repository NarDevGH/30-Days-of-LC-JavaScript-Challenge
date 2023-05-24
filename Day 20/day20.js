/**
 * Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.
 * 
 * The function should compare the properties of the two objects and identify any changes. 
 * The returned object should only contains keys where the value is different from obj1 to obj2. 
 * For each changed key, the value should be represented as an array [obj1 value, obj2 value]. 
 * Keys that exist in one object but not in the other should not be included in the returned object. 
 * When comparing two arrays, the indices of the arrays are considered to be their keys. 
 * The end result should be a deeply nested object where each leaf value is a difference array.
 * 
 * You may assume that both objects are the output of JSON.parse.
 */

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    // Special case: Objects are the same
    if (obj1 === obj2) return {};

    // Special cases: Null values or different types
    if (obj1 === null || obj2 === null) return [obj1, obj2];
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2];
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

    const diffObj = {}; // Object to store the differences

    // Iterate over the keys in obj1
    Object.keys(obj1).forEach(key => {
        if (key in obj2) {
            const subDiff = objDiff(obj1[key], obj2[key]); // Recursive call for nested objects

            // If there are differences, add them to the diffObj
            if (Object.keys(subDiff).length > 0) {
                diffObj[key] = subDiff;
            }
        }
    });

    return diffObj; // Return the object containing the differences
};