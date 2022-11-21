// Exercise 10
// Create a function that accepts 2 arrays of words and returns the common words from each

function returnWords(arr1, arr2){
    const output = []
        for(let j = 0; j < arr2.length; j++){
                let inx = arr1.indexOf(arr2[j])
                if( inx !== -1)output.push(arr1[inx])
    }
    return output
}
console.log(returnWords(["dog",'asd', 'function' ,'function','cat', "parrot"],['function', "cat",'dog']))

// Exercise 10
// Write a function that accepts 2 array arguments and returns a boolean value - Does the first
// array contain all elements represented in the second array

function booleanValue(arr1, arr2){
    let array = returnWords(arr1,arr2)
    return array.length === arr2.length

}
console.log(booleanValue(["dog", 'function' ,'function','cat', "parrot"],['function', "cat",'dog','klas']))

