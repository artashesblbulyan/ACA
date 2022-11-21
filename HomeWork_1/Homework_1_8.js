// Exercise 8
// Write a function that takes an array as an argument. The function should return true if the
// array includes positive numbers more than negatives, and it should return false otherwise.

function isPositive(array){
    let positive = 0
    let negativity = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0) positive++
        else negativity++
    }
    return positive > negativity
}

console.log(isPositive([1,-2,-5,0,4]))

