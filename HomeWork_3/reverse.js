// reverse()
// 28. Using reverse, write a function that checks if the string is
// a palindrome


function palindrome(string){
   let str = string.split('').reverse().join('')
    if(str === string){
        return true
    }
    return false
}

console.log(palindrome('HelqsleH'))