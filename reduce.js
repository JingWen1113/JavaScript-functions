/**Without using the native “Array.prototype.reduce” method of JavaScript, 
 * compose a function titled “myReduce” that will take in an array of 
 * elements and executes a callback function on each of those elements.
 */


/**Array.prototype.myReduce = function (callback, currentValue) {
    var accumulator;
    if (currentValue === undefined)
        accumulator = undefined;
    else
        accumulator = currentValue;
    for (i = 0; i < this.length; i++){
        if (accumulator !== undefined)
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return false;
}; */