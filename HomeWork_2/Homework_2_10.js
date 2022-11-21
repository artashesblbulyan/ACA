// Exercise 10
// Create a function that takes an array and returns the sum of all numbers in the array. If there
// are no numbers in the array, return 0.

function numberSum(array){
    let sum = 0
       for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number"){
            sum += array[i]
        }   
    }
    return sum
}

console.log(numberSum([true, false, "123", "75"]  ));