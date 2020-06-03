/**Without using the native “Array.prototype.some” method of JavaScript, 
 * compose a function titled “mySome” that will take in an array of elements 
 * and executes a callback function on each of those elements.
*/



Array.prototype.mySome = function (callback, condition){
    var k;
    for(k = 0; k<this.length; k++) {
        if(callback.call(condition,this[i],i,this)) return true;
    }
    return false;
};