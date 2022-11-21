// Exercise 12
// Create a function that takes in an array and returns an array of the accumulating sum.
// Note:
// An empty array input should return an empty array.

function accumulatingSum(array){
    let result = []
    let k = 0
    for (let i = 0; i < array.length; i++) {
        k += array[i]
        result.push(k)
        
    }
    return result
}

console.log(accumulatingSum([1, 2, 3, 4] ))