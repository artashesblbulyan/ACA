// Exercise 4
// Create a function that takes a number as an argument and returns true or false
// depending on whether the number is symmetrical or not. A number is symmetrical when it
// is the same as its reverse.
// Note: Please try to solve it without turning the parameter into a string

function symmetrical(number){
   let reversNumber = 0
   let lastDigit = 0
   let result = number
    while (number) {
        lastDigit = number % 10
        reversNumber = reversNumber*10 +(lastDigit)
        number = Math.floor(number/10)
    }
    if (result === reversNumber){
        return true
    }
    return false
   
}
console.log(symmetrical(1233221));