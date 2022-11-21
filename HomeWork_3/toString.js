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

// 1. Create a function that is receiving a collection of employees
// and using toString() returns a string with comma-separated full
// names
function stringToName(employees){
    return employees.map(elem => elem.firstName+elem.lastName).toString()
    
    
}
console.log(stringToName(employees));

function stringTo(employees){
    let fullName = ""
    const array =[]
    for (let i of employees) {
        array.push(i.firstName + i.lastName)  
    }
    return array.toString()
}
// console.log(stringTo(employees));

// 2. Create a function that is receiving a collection of employees
// and using toString() returns a string with comma-separated
// `email: salary` with the following format



function emailSalary(employees){
    let fullName = ""
    const array =[]
    for (let i of employees) {
        array.push(i.email +":"+ i.salary)
        
    }
    return array.toString()
}
// console.log(emailSalary(employees));


function emailSalary1(employees){
    return employees.map(elem => elem.email + ":" + elem.salary).toString()
}
console.log(emailSalary1(employees));
// 3. * Create a custom Array.prototype.myToString it should work
// similarly to Array.prototype.toString

Array.prototype.myToString = function(){
    return `${this}`
}
let a =[1,2,3,4,5]
// console.log(employees.myToString());


