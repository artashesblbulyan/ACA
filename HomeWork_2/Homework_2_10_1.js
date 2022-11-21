// Exercise 10
// Create a function that performs an even-odd transform to an array, n times. Each even-odd
// transformation:
// ● Adds two (+2) to each odd integer.
// ● Subtracts two (-2) from each even integer.
// Input Output
// [3, 4, 9], 3 [9, -2, 15]
// [0, 0, 0], 10 [-20, -20, -20]
// [1, 2, 3], 1 [3, 0, 5]
// Explanation:
// evenOddTransform([3, 4, 9], 3) returns [9, -2, 15]
// Since [3, 4, 9] ➞ [5, 2, 11] ➞ [7, 0, 13] ➞ [9, -2, 15]


function evenOddTransform(array,num){
    let k = 0
   for (let j = 0; j < num; j++) {
        for (let i = 0; i < array.length; i++) {
            console.log(num,array[i],array.length,i)
            if(array[i] % 2 === 0){
                array[i] -= 2
            }else{
                array[i] += 2
            }
        }
   }
    return array
}
console.log(evenOddTransform([3, 4, 9], 3  ))