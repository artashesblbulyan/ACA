const employees = [
    {
    "firstName": "Arabela",
    "lastName": "Fockes",
    "email": "afockes0@wired.com",
    "salary": "$6.18",
    "isEngineer": true,
    "gender": "Female"
    },
    {
    "firstName": "Bryant",
    "lastName": "Marchi",
    "email": "bmarchi1@theatlantic.com",
    "salary": "$8.05",
    "isEngineer": false,
    "gender": "Male"
    },
    {
    "firstName": "Batholomew",
    "lastName": "Eim",
    "email": "beim2@goodreads.com",
    "salary": "$7.26",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Ritchie",
    "lastName": "Ferreira",
    "email": "rferreira3@booking.com",
    "salary": "$4.07",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Kaylyn",
    "lastName": "Ivain",
    "email": "kivain4@gmpg.org",
    "salary": "$5.89",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Wilhelmina",
    "lastName": "Portigall",
    "email": "wportigall5@plala.or.jp",
    "salary": "$2.06",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Rouvin",
    "lastName": "Gillcrist",
    "email": "rgillcrist6@aol.com",
    "salary": "$7.29",
    "isEngineer": true,
    "gender": "Male"
    },
    {
    "firstName": "Flemming",
    "lastName": "Scroggins",
    "email": "fscroggins7@msu.edu",
    "salary": "$7.54",
    "isEngineer": false,
    "gender": "Male"
    },
    {
    "firstName": "Sallee",
    "lastName": "Schlagh",
    "email": "sschlagh8@reuters.com",
    "salary": "$2.24",
    "isEngineer": false,
    "gender": "Female"
    },
    {
    "firstName": "Roxine",
    "lastName": "Bedo",
    "email": "rbedo9@whitehouse.gov",
    "salary": "$6.47",
    "isEngineer": false,
    "gender": "Female"
    }
    ]

    // 7. Create a function that is receiving an array and returns
    // reversed one using pop()

function popReversed (array){
    const newArray  = [...array]
    for (let i in newArray) {
        newArray[i] = array.pop()
    }
    return newArray
}



console.log(popReversed([1,2,3,4,5,6]))
// 8. Create a function that is receiving a sting argument and checks
// if it is a palindrome using pop()

function popPalindrome  (str){
    const array = str.split('')
    for (let i = 0; i < array.length; i++) {
    if(array.pop() === array[i]){

        if(i === array.length-1){
            return true
        }
    }else return false
    
    }
    
}

console.log(Array.from("asdsdsa").every((elem,index,arr) => elem === arr.reverse()[index]))

console.log(popPalindrome("asddsa"))

// 9. * Create a custom Array.prototype.myPop should work similarly to
// Array.prototype.pop


Array.prototype.myPop = function(){
        let length = this.length -1
        let result = this[length]
        this.length = length
        return result
    }
    
let as = [1,2,3,4,5,6,7]
console.log(as.myPop(),as)
