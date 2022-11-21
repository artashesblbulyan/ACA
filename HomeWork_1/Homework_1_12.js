// Exercise 12
// Create a function that will reverse the given string.

function reverseString(str){
    let str1 = ''
    // let i = str.length
    for(let i = str.length-1; i >= 0; i--){
        str1 += str[i]

    }
    return str1
}


console.log(reverseString('Artashes'))