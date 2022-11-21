// Exercise 6
// Write a function that takes a number as an argument. Return an array containing the two
// halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(number){
    const array = []
    if(number % 2 === 0)array.push(number/2,number/2)
    
    else array.push((number-1)/2, ((number-1)/2)+1)
    
    return array
}
console.log(numberSplit(40))
