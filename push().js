/** Without using the native “Array.prototype.push” method of JavaScript, 
 * compose a function titled “myPush” that will take in an array of elements 
 * as well as an elementToAdd and append that element to the 
 * end of the array.*/

 Array.prototype.myPush = function(callback, elementToAdd){
    var anArray ;
    anArray.push(callback(elementToAdd,anArray.length-1,this));
 };