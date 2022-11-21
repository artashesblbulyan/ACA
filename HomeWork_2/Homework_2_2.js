// Exercise 2
// Create a function that takes an array of numbers and returns the sum of the two lowest
// positive numbers.

function positiveArray(array){
    const array1 = []
    for (let i = 0; i < array.length; i++) {
     if(array[i] > 0){
       array1.push(array[i])
     }
    }
    return array1
}
//////////////////
function sumNumber(array){
    const array1 = positiveArray(array)
   array1.sort((a, b) => a - b)
   return array1[0]+array1[1]
}
console.log(sumNumber([2,67,223,8,-7,33,5,9,-8]))

/////////////////////
function matMin(array){
    const array1 = positiveArray(array)
    let min = Math.min(...array1)
    let secondMin = Math.max(...array1)
    for (let i = 0; i < array1.length; i++) {
       if(array1[i] > min && secondMin > array1[i]){
        secondMin = array1[i]
       }
    }
    return secondMin + min
}

console.log(matMin([2,67,223,8,-7,33,5,9,-8]))
////////////////

function secondMin(array){
    const array1 = positiveArray(array)
    let min = array1[0]
    let secondMin = array1[0]
    for (let i = 0; i < array1.length; i++) {
        if(array1[i] < min){
            min = array1[i]
        }
        if(array1[i] > secondMin){
            secondMin = array1[i]
        }
    }
    for (let j = 0; j < array1.length; j++) {
        if(array1[j] > min && secondMin > array1[j]){
            secondMin = array1[j]
           } 
    }
    return secondMin + min

}

console.log(secondMin([2,67,223,8,-7,33,5,9,-8]))