// Exercise 4
// Create a function that takes a number and returns one digit that is the result of summing all
// the digits of the input number. When the sum of the digits consists of more than one digit,
// repeat summing until you get one digit.
// Note:
// Counting the sum of digits and the main task itself should be written in a recursive way.
// Input Output
// 123 6
// 999888777 9
// 111222333 9
// Explanation
// 111222333 → 1+1+1+2+2+2+3+3+3 = 18
// 18 → 1+8 = 9


function sumDigits(number) {
    const res =Array.from(`${number}`).reduce((a,b)=>a+ +b,0)
    if(number.length === 1){
        return number
    }
    return sumDigits(`${res}`)
}



console.log(sumDigits(111222333));