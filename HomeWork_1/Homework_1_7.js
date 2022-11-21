// Exercise 7
// Write a function that takes an array of numbers as an argument. The function should reverse
// the array and return it.

function getReverse(array){
   const array_1 = [...array]
   for(let i = 0; i < array_1.length; i++){
    array.pop()
    array.unshift(array_1[i])
   }
    console.log(array)
}
getReverse([2,2,3,1,1])

