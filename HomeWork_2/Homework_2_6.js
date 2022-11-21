// Exercise 6
// For each number in an array, check if that number is greater than the sum of all numbers
// that appear before it in the array. If all numbers in the array pass this test, return true.
// Return false otherwise.
// Note: The first number in any array will always pass the test


function sumNumber(array){
    let number = array[0]
    let result = true
    for (let i = 1; i < array.length; i++) {
        if(array[i] > number){
            number += array[i]
        }
        else{
            return false
        }
        
    }
    return true
}
console.log(sumNumber([2,3,7,13,28]));