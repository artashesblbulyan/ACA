// Exercise 5. OOP Structure
// Let's imagine that we have the following classes
// ● City
// ● Building
// ● Hospital
// ● PoliceDepartment
// ● Car
// ● PoliceCar
// ● AmbulanceCar
// Please decide on the inheritance hierarchy.
// You have to decide which class will be a parent class and which should
// be a child class by correctly extending classes from each other.
// Example:
// PoliceCar extends Car {...}
// Also please implement the following conditions.
// Condition 1.
// The City has many buildings. It may be an array property of the City class named
// buildings. It can include different Objects of the Building type
// Example:
// const nairiHospital = new Hospital();
// ...
// const erebuniHospital = new Hospital();
// ...
// const centralPoliceDepartment = new PoliceDepartment()
// city.buildings = [nairiHospital, erebuniHospital,
// centralPoliceDepartment]
// Condition 2.
// Is similar to Condition 1. Buildings can have many cars.
// For example, a Hospital may have 10 AmbulanceCars or a police department may
// have police cars

class City{
    buildings = []
}

class Building extends City{

}

class Hospital extends City{
    car = []
}

class PoliceDepartment extends City{

}

class Car{

}

class PoliceCar extends Car{
    car =[]
}

class AmbulanceCar extends Car {
    
}

const ambulanceCar1 = new AmbulanceCar()
const ambulanceCar2 = new AmbulanceCar()
const policeCar1 = new PoliceCar()
const policeCar2 = new PoliceCar()
const policeCar3 = new PoliceCar()
const policeCar4 = new PoliceCar()

const nairiHospital = new Hospital();

    nairiHospital.car = [ambulanceCar1,ambulanceCar2]    

const erebuniHospital = new Hospital();

const centralPoliceDepartment = new PoliceDepartment()
centralPoliceDepartment.car = [policeCar1,policeCar2,policeCar3,policeCar4]
const city = new City()
city.buildings = [nairiHospital, erebuniHospital,centralPoliceDepartment]
console.log(city)