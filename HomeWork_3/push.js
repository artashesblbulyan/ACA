// 10. Create a function that is receiving a number and returns an
// array which is containing all even digits. Use push method
function evenArray(number){
    const newArray =[]
    for (let i = 0; i < number; i++) {
        if(i % 2 === 0){
            newArray.push(i)
        }
        
    }
    return newArray
}
console.log(evenArray(20))



// 11. Create a function that will receive two collections of
// employees and adds the items of the second collection to the
// first collection. Use push method
function collections(array1,array2){
    for (let i = 0 ; i < array2.length; i++) {
       array1.push(array2[i])
    }
    return array1
} 


console.log(collections([1,2,3,4,5,6],[7,8,9,10,11,12,'k']))


// 12. * Create a custom Array.prototype.myPush should work
// similarly to Array.prototype.push

Array.prototype.myPush = function(...args){
    let lengthArr = this.length
    for (let i = 0; i < args.length; i++) {
        this[lengthArr+i] = args[i]
    }
   return this.length
}


const arr = [1,2,3,4,5,6]
console.log(arr.myPush(7,5,6,7),arr)
// console.log(arr)