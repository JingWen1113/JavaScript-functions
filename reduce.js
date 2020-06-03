/**Without using the native “Array.prototype.reduce” method of JavaScript, 
 * compose a function titled “myReduce” that will take in an array of 
 * elements and executes a callback function on each of those elements.
 */


Array.prototype.myReduce = function(callback, currentValue){
    var reducer;
    if (currentValue === undefined)    reducer = undefined;
    else reducer = currentValue;
    for ( i = 0; i < this.length; i++){
        if(reducer !== undefined)   reducer = callback.call(undefined,reducer,this[i],i,this);
        else reducer = this[i];
    }
    return false;
};