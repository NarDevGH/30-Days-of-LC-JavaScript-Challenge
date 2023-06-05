/**
 * Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.
 * inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.
*/

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) yield* inorderTraversal(arr[i])

        else yield arr[i]

    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */