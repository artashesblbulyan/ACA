// Exercise 7
// Write a function that takes two sorted arrays of numbers and returns an array of numbers
// which are common to both the input arrays.
function getCommonElements(arr1,arr2){
    const result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j< arr2.length; j++) {
            if(arr1[i] === arr2[j]){
                result.push(arr1[i])
            }
        }
    }
    return result
}
console.log(getCommonElements([-1,3,4,6,7,9], [1,3]));

///////////////////////////////////

function getCommonElements2(arr1,arr2){
    const result = []
    for (let i = 0; i < arr1.length; i++) {
       let idx = arr2.indexOf(arr1[i])
       if(idx !== -1){
        result.push(arr1[i])
       }
    }
    return result

}

console.log(getCommonElements2([1,3,4,6,7,9], [1,2,3,4,7,10]));