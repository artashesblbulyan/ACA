// Exercise 9
// Write a function to return only unique values of the given array.


function unique(array){
    const output = []
    for(let i = 0 ; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if (array[i]===array[j] && i!==j)break
            if(j === array.length-1){
                output.push(array[i])
            }
        }
        
    }
    return output
}

const array = ["a", "a","b", "a",'k']

console.log(unique(array))