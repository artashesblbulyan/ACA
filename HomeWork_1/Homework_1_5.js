// Exercise 5
// Write a function that takes two numbers as arguments and returns an array containing all the
// even numbers between the arguments. If there are no even numbers between the
// arguments the function should return “There are no even numbers”.


function evenFrom(number1, number2){
    const output = []
    let number = number1 + 1
    while(number < number2){
        if(number % 2 === 0)output.push(number)
        number++
    }
    if(output.length === 0)return 'There are no even numbers'
    return output
}

console.log(evenFrom(12,13))
