/**
 * Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, 
 * booleans, and null. The returned string should not include extra spaces. 
 * The order of keys should be the same as the order returned by Object.keys().
 * 
 * Please solve it without using the built-in JSON.stringify method.
 */

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function (object) {
    let string = ""
    if (Array.isArray(object)) {
        string = "["

        object.forEach(element => {
            if (element) {
                if (typeof element === "object") {
                    string += jsonStringify(element) + ",";
                }
                else {
                    string += `"${element}",`;
                }
            }
            else {
                string += "null,";
            }
        });
        string = string.replace(/,$/, "")
        string += "]"
    }
    else if (typeof object === "object") {
        string = "{"

        Object.entries(object).forEach(entries => {
            const [key, value] = [...entries];
            string += `"${key}":`;
            if (value) {
                if (typeof value === "object") {
                    string += jsonStringify(value);
                }
                else {
                    string += typeof value === "string" ? `"${value}",` : `${value},`
                }
            }
            else {
                string += "null,";
            }
        })
        string = string.replace(/,$/, "")
        string += "}"
    }
    else if (typeof object === "string") {
        string = '"' + object.replace(/[\\"\n\r\t]/g, char => escapeMap[char]) + '"';
    }
    else {
        string = `${object}`
    }
    return string;
};

console.log(jsonStringify(true))