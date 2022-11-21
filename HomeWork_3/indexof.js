// indexOf()
// 41. Write a function which is checking if a given element
// contains inside an array


function checkingIndex(array,el){
    if(array.indexOf(el) !== -1){
        return true
    }
    return false
}

console.log(checkingIndex([1,2,3,4,5,6],5))