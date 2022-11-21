// Create a Circle() constructor that takes the radius as a single argument and has the
// following properties and methods:
// ● .radius
// ● .diameter
// ● .getC() (get circumference)
// ● .getA() (get area)
// Notes:
// ● Circumference: 2πr. Area: πr^2.
// ● Use Math.PI for calculating circumference and area.
// ● Round the perimeter and area results to the nearest hundredths place

function Circle(radius){
     this.radius = radius
}

Circle.prototype.radius = function(){
    this.radius
}

Circle.prototype.diameter = function(){
    this.diameter = this.radius * 2
}

Circle.prototype.getC = function(){
    this.circumference = 2*Math.PI*this.radius
}

Circle.prototype.getA = function(){
    this.area = Math.PI* this.radius ** 2
}

const object = new Circle(5);
const object1 = new Circle(10);
const object2 = new Circle(15);
object.diameter();
object1.diameter();
object2.diameter();
object.getC()
object1.getC()
object2.getC()
object.getA()
object1.getA()
object2.getA()
console.log(object,object1,object2)