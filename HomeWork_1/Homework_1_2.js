// Exercise 2
// Find the smallest and the largest number from the supplied numeric array. Return an array
// containing these numbers

function minMax(array){
    let min = array[0]
    let max = array[0]
    for(let inx = 0; inx < array.length ; inx++){
        if(array[inx] > max){
            max = array[inx]
        }
        if(array[inx] < min){
            min = array[inx]
        }
    }
    const output = [min,max]
    // output.push(min)
    // output.push(max)
    return output
}

console.log(minMax([1, -1, 4, 5, 66, 9]))

