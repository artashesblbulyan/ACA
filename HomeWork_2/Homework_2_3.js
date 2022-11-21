// Exercise 3
// Create a function that, given a number, returns the corresponding value of that index in the
// Fibonacci series.
// The Fibonacci Sequence is the series of numbers:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// The next number is found by adding the two numbers before it:
// ● The 2 is found by adding the two numbers before it (1+1).
// ● The 3 is found by adding the two numbers before it (1+2).
// ● The 5 is (2+3), and so on!


function fibonacci(number){
    let sum =  0
    let num1 = 1
    let num2 = 0
    for (let i = 0; i < number; i++) {
        sum = num1 + num2
        num2 = num1
        num1 = sum
    }
    return sum
}

console.log(fibonacci(3));