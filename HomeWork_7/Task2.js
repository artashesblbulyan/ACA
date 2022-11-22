// Exercise 2
// Create a function that finds the highest integer in the array using recursion.
// Note:
// Suppose the array has at least one element.
// Input Output
// [1,2,3,4] 10
// [1,4,6,2,44,56,9] 44
// [2] 2
// [1,1,1] 1

function highestInteger(arr) {
    let max = arr[0]
    if(arr.length === 1){
        return max
    }
    arrPop = arr.pop() 
    if(arr[0] < arrPop){
        arr[0] = arrPop
    }
    
    
  return highestInteger(arr)

}

console.log(highestInteger([9]))