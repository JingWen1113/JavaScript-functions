/* Without using the native “Array.prototype.map” method of JavaScript,
 compose a function titled “myMap” that will take in an array of elements 
 and executes a callback function on each of those elements.
*//**
Array.prototype.myMap = function (callback) {
    var a = [];
    var i;
    for (i = 0; i < this.length; i++) {
        a.push(callback(this[i], i, this));
    }
    return a;
}; */