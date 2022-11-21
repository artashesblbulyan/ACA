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

//     4. Create a function that is receiving a collection of employees
// and returns a string containing emails in the following format
// email1@example.com//email2@example.com//email3@example.com

function joinEmail(employees){
    let email = []
    for (let i of employees) {
        email.push(i.email)
    }
    return email.join('//')
}

console.log(employees.map(elem => elem.email).join('//'))

// console.log(joinEmail(employees));

// 5. Create a function that is receiving a collection of employees
// and returns a string with comma-separated email: salary


function joinEmailSalary(employees){
    let email = []
    
    for (let i of employees) {
        email.push(i.email +':'+ i.salary )
    }
 
    return email.join(',')
}

console.log(Array.from(employees,elem => elem.email+ ':' + elem.salary).join(','))
// console.log(joinEmailSalary(employees));

// 6. * Create a custom Array.prototype.myJoin should work similarly
// to Array.prototype.join

Array.prototype.myJoin = function(elem){
    let str =""
    if (elem){
    for (let i = 0; i < this.length; i++) {
        str += this[i]
        if(i !== this.length-1){
            str += elem
        }
    }
    return str
}
return `${this}`
    
}

let array = ["a",'s','d','f','g',]
console.log(array.myJoin(",,"))

