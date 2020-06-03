/**Without using the native “Array.prototype.every” method of JavaScript,
 *  compose a function titled “myEvery” that will take in an array of elements 
 * and executes a callback function on each of those elements.
 */
/**Array.prototype.myEvery = function (callback, condition) {
    var i;
    for (i = 0; i < this.length; i++){
        if (!callback.call(condition, this[i], i, this))
            return false;
    }
    return true;
}; */