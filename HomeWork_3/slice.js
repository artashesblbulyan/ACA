// slice()
// 20. Using slice, write a JavaScript function to clone an array
function cloneArray(array){
    const newArray = []
    for (let i = 0; i < array.length; i++) {
       newArray[i] = array.slice(i,i+1)[0]
        
    }
    return newArray

}

console.log(cloneArray([1,2,3,4]))

// 21. Using slice, Write a JavaScript function to get the last
// element of an array. Passing a parameter 'n' will return the
// last 'n' elements of the array

function lastElement(array,n=1){
    return array.slice(-n)
}


console.log(lastElement([1,2,3,4,5,6],3));




// 22. Using slice, Write a JavaScript function to get the first
// element of an array. Passing a parameter 'n' will return the
// first 'n' elements of the array

function firstElement(array,n=1){
    return array.slice(0,n)
}


console.log(firstElement([1,2,3,4,5,6],2));

// 23. * Create a custom Array.prototype.mySlice should work
// similarly to Array.prototype.slice

Array.prototype.mySlice = function(firstElement,lastElement){
    if(!lastElement){
        lastElement = this.length
    }
    if(!firstElement){
        firstElement = 0
    }
    if(firstElement < 0){
        firstElement = this.length + firstElement
    }
    if(lastElement < 0){
        lastElement = this.length + lastElement
    }
    for (let i = 0; i < lastElement-firstElement; i++) {
        this[i] = this[firstElement +i]
        
    }
    this.length = lastElement-firstElement

    return this

}
console.log([1,2,3,4,5,6].mySlice());