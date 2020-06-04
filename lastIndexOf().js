/*Without using the native “Array.prototype.lastIndexOf” method
 of JavaScript, compose a function titled “myUnshift” (typo) that 
 will take in an array of elements and returns the index of the last 
 encounter of a target element (if it is found) or -1 if that element
  does not exist within the input array.
 */

 /*Array.prototype.myUnshift = function(callback,lastEncounterTargetIndex){
    var i;
    for(i = this.length-1;i=0;i-- ){
        if(callback.call(this[i],i,this)===lastEncounterTargetIndex)    
        return lastEncounterTargetIndex;
    }
    return -1;
 };
 */


function myLastIndexOf(anArray, targetElement, currentPosition=0){
  var {length} = array;
  var index = -1;
 
 if(currentPosition <0 || currentPosition >= length){
  currentPosition = 0;
 }
 for( var i =currentPosition; i<this.length;i++){
   index = i;
 }
 return index;
};

console.log(myLastIndexOf(a,8));//call the function and print out
