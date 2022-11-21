// from
// 44. Using form, write a JavaScript function to clone an array

function cloneFrom(array){

    return Array.from(array)
}


console.log(cloneFrom([1,2,3,4,5]));
// 45. Using from, and Set create a function that is removing
// duplicates from an array
function setFrom(array){

    return Array.from(new Set(array))
}


console.log(setFrom([1,2,3,3,4,5,4,5,6]));
// 46. Using from, turn the string into an array


const arr = Array.from('asdfgh')
console.log(arr)