/**
 * Write a function that converts an array of objects arr into a matrix m.
 * 
 * arr is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. 
 * It can also contain numbers, strings, booleans, and null values.
 * 
 * The first row m should be the column names. If there is no nesting, the column names are the unique keys within the objects. 
 * If there is nesting, the column names are the respective paths in the object separated by ".".
 * 
 * Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds to a value in an object. 
 * If a given object doesn't contain a value for a given column, the cell should contain an empty string "".
 * 
 * The colums in the matrix should be in lexographically ascending order.
 */

/**
 * @param {Array} arr
 * @return {Matrix}
 */
var jsonToMatrix = function (arr) {
    // Helper function to check if a value is an object
    const isObject = x => (x && typeof x === 'object');

    // Recursive function to extract keys from nested objects
    const getKeys = object => {
        if (!isObject(object)) return ['']; // If the value is not an object, return an empty key
        const result = [];
        for (const key of Object.keys(object)) {
            const childKeys = getKeys(object[key]); // Recursively get keys from nested objects
            for (const childKey of childKeys) {
                result.push(childKey ? `${key}.${childKey}` : key); // Append child keys with dot notation
            }
        }
        return result;
    };

    // Extract all unique keys from the array of objects and sort them
    const keys = Array.from(new Set(arr.reduce((acc, curr) => {
        getKeys(curr).forEach(k => acc.add(k));
        return acc;
    }, new Set()))).sort();

    // Retrieve the value for a given key path in an object
    const getValue = (obj, path) => {
        const paths = path.split('.');
        let i = 0;
        let value = obj;
        while (i < paths.length && isObject(value)) {
            value = value[paths[i++]];
        }
        // If the value is not found or is an object, return an empty string
        return i < paths.length || isObject(value) || value === undefined ? '' : value;
    };

    // Create the matrix representation with keys as the first row and values as subsequent rows
    const matrix = [keys];
    arr.forEach(obj => {
        matrix.push(keys.map(key => getValue(obj, key)));
    });

    return matrix;
};

console.log(jsonToMatrix([{ "b": 1, "a": 2 }, { "b": 3, "a": 4 }]));