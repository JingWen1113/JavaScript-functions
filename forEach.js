/* Without using the native “Array.prototype.forEach” method of JavaScript, 
compose a function titled “myEach” that will take in an array of elements and 
executes any callback function on each of those elements.
*/


/*native forEach() method would look like this: 
const myArray = [ 'a','b','c'];
myArray.forEach(element => console.log(element));*/

/*without using the native method of forEach,call the funtion myEach(). */

Array.prototype.myEach = function(callback){
    var i;
    for(i = 0; i<this.length; i++){
        callback(this[i], i, this);
    }

};