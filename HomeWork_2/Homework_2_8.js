// Exercise 8
// Create a function to get the intersection of two arrays

function intersection(arr1,arr2){
    const result = []
    for (let i = 0; i < arr1.length; i++) {
       let idx = arr2.indexOf(arr1[i])
       if(idx !== -1){
        result.push(arr1[i])
       }
    }
    return result
}
console.log(intersection(['a', 'b', 'c'],['a', 'b', 'c', 'd']));

/////////////////////////////////

function filterIntersection(arr1,arr2){
    return arr1.filter(inx => arr2.indexOf(inx) !== -1)
}
console.log(filterIntersection(['a', 'b', 'c'],['a', 'b', 'c', 'd']));