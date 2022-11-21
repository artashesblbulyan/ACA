// Exercise 5
// Write a function that returns all the elements in an array that are strictly greater than their
// adjacent left and right neighbors.
// Notes:
// ● Do not count boundary numbers, since they only have one left/right neighbor.
// ● If no such numbers exist, return an empty array.

function adjacent(array){
    const result = []
    for (let i = 1; i < array.length-1; i++) {
        if(array[i] > array[i-1] && array[i+1] < array[i]){
            result.push(array[i])
        }
    }
    return result
}
console.log(adjacent([4,5,2,1,4,9,7,2]));