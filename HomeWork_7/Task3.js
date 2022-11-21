// Exercise 3
// Create a function that calculates the number of different squares in an n * n square grid.
// Solve this using recursion.
// Explanation:
// ● If n = 0 then the number of squares is 0
// ● If n = 1 then the number of squares is 1 + 0 = 1
// ● If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
// ● If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
// As you can see, for each value of n the number of squares is n squared + the number of
// squares from the previous value of n.
// Input Output
// 2 5
// 4 30
// 5 5


function squared(n) {
    let squ = n**2
  if(n === 1 ){
    return 1
  }  
  return n**2 + squared(n-1)
}



console.log(squared(5));