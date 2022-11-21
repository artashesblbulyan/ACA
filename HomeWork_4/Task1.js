// Task 1
// Create a function that determines whether a shopping order is eligible for free shipping. An
// order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
// Examples:
// freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
// freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
// freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams":
// 13.99 }) ➞ true



function freeShipping(shopping){
    let exceeds = 0
    for(let i in shopping ){
        exceeds += shopping[i]
    }
    if(exceeds > 50){
        return true
    }
    return false
}
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams":13.99 }) )

