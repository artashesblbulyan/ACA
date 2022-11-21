// Exercise 4
// Create a function that takes three values:
// ● h hours
// ● m minutes
// ● s seconds
// Return the value that's the longest duration.
// Examples:
// longestTime(1, 59, 3598) ➞ 1
// longestTime(2, 300, 15000) ➞ 300
// longestTime(15, 955, 59400) ➞ 59400


function longestTime(h,m,s) {
    min = m / 60
    sec = s /3600
    console.log(h,min,sec);
    if(h > min && h > sec){
        return h
    }
    else if(min>h && min>sec){
        return m
    }else{
        return s
    }
}

console.log(longestTime(1, 59, 3598))
console.log(longestTime(2, 300, 15000))
console.log(longestTime(15, 955, 59400))