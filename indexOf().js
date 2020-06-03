/*Without using the native “Array.prototype.indexOf” method of 
JavaScript, compose a function titled “myIndexOf” that will take in an 
array of elements and returns the index of the first encounter of a
 target element (if it is found) or -1 if that element does not exist 
 within the input array.
 */

 Array.prototype.myIndexOf(callback, targetElement){
    
    var i;
    for(i =0; i<this.length; i++){
        if( callback.call(this[i],i,this)===targetElement){
            
            return i;
        }   
    }
    return -1;         
 };
