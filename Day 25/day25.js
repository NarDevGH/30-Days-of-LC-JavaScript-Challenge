/**
 * Enhance all functions to have the callPolyfill method. 
 * The method accepts an object obj as it's first parameter and any number of additional arguments. 
 * The obj becomes the this context for the function. 
 * The additional arguments are passed to the function (that the callPolyfill method belongs on).
 * 
 * Calling this function like tax(10, 0.1) will log "The cost of undefined is 11".
 * This is because the this context was not defined.
 * 
 * However, calling the function like tax.
 * callPolyfill({item: "salad"}, 10, 0.1) will log "The cost of salad is 11". 
 * The this context was appropriately set, and the function logged an appropriate output.
 * 
 * Please solve this without using the built-in Function.call method.
 */

/**
 * SOLUTION BY Boolean_Autocrats
*   Intuition
* - We have to call fn with context as parent object without using Function.call so that context become this in fn.
* - To do so we will use Object.Prototype.
*   Approach
* - In callPolyfill we will first access fn using this pointer.
* - const fn=this//As fn have called callPolyfill method so reference to fn is passed as this pointer.
* - We have to used a way so that fn become member of context but context does not have any key whose value is fn.
* - To implement this, we will use Object.prototype.
* - Object.prototype.func=fn.
* - return context.func(...args)
*   Complexity
* Time complexity:O(1)
* Space complexity:O(1)
*/

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    const fn = this;
    Object.prototype.func = fn;
    return context.func(...args);
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */