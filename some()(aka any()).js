/**Without using the native “Array.prototype.some” method of JavaScript, 
 * compose a function titled “mySome” that will take in an array of elements 
 * and executes a callback function on each of those elements.
 /**
  * Array.prototype.mySome = function (callback, condition) {
    var i;
    for (i = 0; i < this.length; i++){
        if (callback.call(condition, this[i], i, this))
            return true;
    }
    return false;
}; */