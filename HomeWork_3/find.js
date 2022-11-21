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

// find()
// 42. Create a function that will find the employee by the provided
// name
function findEmployee(employees,name){
    return employees.find(elem => elem.firstName === name)
}
// console.log(findEmployee(employees,"Bryant"));

// 43. Create a function that will find the employee by filter.
// Example: findEmployee(
// employees,
// {firstName: `Flemming`, lastName: `Scroggins`)
// );


function employeeFilter(employee,a){
    let findEmployee
    for (let i  in a) {
        findEmployee = employee.find(elem => elem[i]===a[i])
    }
 return findEmployee
}


console.log(employeeFilter(employees,{firstName: `Flemming`, lastName: `Scroggins`}))



Array.prototype.myFind = function(elem){
    for (let i = 0; i < this.length; i++) {
        if(elem(this[i],this,i)){
            return this[i]
        }
    }
  
}

const array1 = [1, 2, 3, 4];
const sum = array1.myFind(elem => elem === 4)
// console.log(sum);