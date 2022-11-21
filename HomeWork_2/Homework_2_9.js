// Exercise 9
// Create a function to get the sum of each positive element from the given array. If there are
// no positive values in the array, return 0.

function positiveSum(array){
    let sum = 0
       for (let i = 0; i < array.length; i++) {
        if(array[i] > 0){
            sum += array[i]
        }   
    }
    return sum
}

console.log(positiveSum([1,4,-6,23,-1,0]));