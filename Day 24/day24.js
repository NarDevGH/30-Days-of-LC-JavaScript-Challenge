/**
 * Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
 * 
 * The provided callback fn will accept an item in the array and return a string key.
 * 
 * The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
 * 
 * Please solve it without lodash's _.groupBy function.
 */

/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function (fn) {
    // Use reduce to iterate over the array and create the grouped object
    return this.reduce((grouped, item) => {
        // Call the provided callback function to get the key
        const key = fn(item);

        // Check if the key doesn't exist in the grouped object
        if (!(key in grouped)) {
            // Create an empty array for the key
            grouped[key] = [];
        }

        // Push the item into the corresponding array in the grouped object
        grouped[key].push(item);

        // Return the updated grouped object for the next iteration
        return grouped;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */