/**Without using the native “Array.prototype.filter” method of JavaScript, 
 * compose a function titled “myFilter” that will take in an array of elements 
 * and executes a callback function on each of those elements.
 */


/**Array.prototype.myFilter = function (callback, condition) {
    var a = [];
    var i;
    for (i = 0; i < this.length; i++){
        if (callback.call(condition, this[i], i, this))
            a.push(this[i]);
    }
    return a;
}; */
Array.prototype.myFiller = function(callback,condition){
    var anArray = [];
    var i;
    for(i = 0; i<this.length; i++){
        if(callback.call(condition, this[i],i,this))    anArray.push(this[i]);
    }
    return anArray;
};