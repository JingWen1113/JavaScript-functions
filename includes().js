/** Without using the native “Array.prototype.includes” method of JavaScript, 
 * compose a function titled “myIncludes” that will take in an array of elements 
 * and indicates whether or not a target element is contained within the input array. 
 * This returns a boolean.*/

 Array.prototype.myIncludes = function ( callback, target){
    
     var i;
     for(i = 0; i<this.length;i++){
         if(!callback.call(target,this[i],i,this))  return false;  
        
     }
     return true;
 };