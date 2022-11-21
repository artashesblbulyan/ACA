//Exercise 1
//Find the value that is not being repeated inside the given array.
let k = 0
const array = ["a", "a","b", "a"]
for(let i = 0 ; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
        if (array[i]===array[j] && i!==j)break
        if(j === array.length-1){
            console.log(array[i])
        }
    //    console.log(array[i],array[j])
    }
    
}


