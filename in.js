// const array = [1,2,3,4,5,6,7,8,9]
// function reverse(array){
//     for (let i = 0; i < array.length/2; i++) {
//         let elem = array[i]
//         array[i] = array[array.length-1-i]
//         array[array.length-1-i]=elem
        
//     }
//     return array
// }
// console.log(array)



//  function stringWord(string){
//     const array = string.split(' ');
//     console.log(array)
//     let lengthA = array[0]
//     for (let i of array){
//         if(i.length > lengthA.length){
//             lengthA = i 
//     }
//  }

// return lengthA
// }
// console.log(stringWord('Web development tutorial'))

// function sum(number){
//     let sum = ""
//     while(number){
//         sum += number % 10
//        number = (number-(number % 10))/ 10
//     }
//     return +sum
// }

// console.log(sum(12345))
// function checks(number){
//     const output = []
//     let str = String(number)
//     for (let i = 0; i < str.length; i++) {
//             output.push(str[i]%str[i-1] === 0)
//     }
//    return output

//     }

// console.log(checks(73312))


// function largestNumber(array){
//     let max = [array[0]]
//     let secondLargest = [array[0]]
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] > max){
//             max =array[i]
//         }  
//     }
//     for (let j = 0; j < array.length; j++) {
//         if(array[j] > secondLargest < max){
//             secondLargest =array[j]
//         }  
//     }

//     return secondLargest
// }

// console.log(largestNumber([40,20,60,40,50]))



// function removeDuplicates(array){
//     const array1 = []
//     for (let i = 0; i < array.length; i++) {
//         if(array1.indexOf(array[i]) === -1){
//             array1.push(array[array.indexOf(array[i])]) 
//         }
        
        
//     }
//     return array1
// }

// console.log(removeDuplicates([40,50,20,50,60,40,50]))



// const array = [
//     {
//       name: "John",
//       age: 22,
//       gender: "male",
//     },
//     {
//       name: "Kate",
//       age: 12,
//       gender: "female",
//     },
//     {
//       name: "Jack",
//       age: 50,
//       gender: "male",
//     },
//     {
//       name: "Rack",
//       age: 17,
//       gender: "male",
//     },
//     {
//       name: "Dave",
//       age: 10,
//       gender: "male",
//     },
//   ];

// const age18 = array.filter(data => data.age > 18)





// Array.prototype.myFilter = function(elem){
//     const newArray = []
//     for (let i = 0; i < this.length; i++) {
//         if(elem(this[i],this,i))
//         newArray.push(this[i])
//     }
//     return newArray
// }

// console.log(age18.myFilter(data => data.age > 18))



// const numbers = [1,2,3]


// function investigateReduse(){
//     let call = 1;
//     const sum = number.reduce()
// }



// Array.prototype.myReduce = function(elem,value){
//     let result = value
//     let i = 0
//     if(typeof value === "undefined"){
//          result = this[0]
//          i = 1
//     }
//     while (i < this.length) {
//         result = elem(result,this[i],i,this)
//         i++
//     }
//     return result
// }
// const array1 = ['b', 'a', 's', 'd'];
// const sum = array1.myReduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   "a"
// );

// console.log(sum);



// Array.prototype.myMap = function(element){
//     const newArray=[]
//     console.log(element,newArray)
//     for(let item of this){
//        newArray.push(element(item))
//     }
//     return newArray
//   };
//   console.log([1,2].myMap(item => item * 5))


// const a = [
//         {
//             count: [1,2,3,4]
//         },
//         {
//             count: [1,2,3,4]
//         },
//         {
//             count: [1,2,3,4]
//         },
    
//     ]
// const  b = []
// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
        
//     }
//    console.log(a[i].count[i])

    
// }


// function a(x) {
//   function b(y){
//     function c(z){
//       return x+y+z
//     }
//     return c 
//   }
//   return b 
// }
// console.log(a(1)(2)(3))



// function argsSum(){
//   let result = 0
//   for (let i = 0; i <= arguments.length; i++) {
//       result += i
//   }
//   return result
// }


// console.log(argsSum(1,2,3,4))


// const obj = {
//   num:2,
// }


// function add(a,b){
//   return this.num + a + b
// }


// const funct = add.bind(obj,4,5)
// console.log(funct())



// const obj = {
//   nume :  "Artash",
//   age : "30"
// }

// console.log(obj.map((elem)=>elem[elem.name]=elem.name))

// function  foo(obj){
//   const  newObj ={}
//   for(let key in obj){
//     newObj[obj[key]] = key
//   }
//   return newObj
// }


// console.log(foo(obj))
// const library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];


// function foo(array) {
//   const newArray =[]
//   for (let a  of array){
//       newArray.push(a.readingStatus)
//   }
//   return newArray
// }

// // console.log(foo(library))

// console.log()
// const newArray = library.map((elem)=> elem.readingStatus)

// console.log(-11.3 && !NaN || 0)


// let time = 0

// for(let i=0 ,j=0;i<5 && j<4;i++,j++){
//   time++
// }
// console.log(time)
// 4,3,2,1

// let arr =[]
// arr[20]=true
// console.log(arr.length)


// function aa(arr){
//   let max = arr[0]
//   let max1 = arr[0]
//   const result = []
// for (let i = 1; i < arr.length; i++) {
  
//     if (max < arr[i] ){
//       max = arr[i]
//     }
   
  
  
// }
//   return [max1,max]
// }
// let a = [1,2,10,5,25,4,7,8]
// console.log(aa(a))
// console.log(a)


// function Button(value) {
//   this.value = value
  
// }

// Button.prototype.displayValue = function() {
    
// }

// Button.prototype.increment = function(){

// }

// Button.prototype.decrement = function(){

// }

// function Dashbprd(value) {
//   this.value = value
// }

// function Profile(value) {
//    this.value = value
// }


// const dashboard = new Dashboard(20)
// const profile = new Profile(10)

// var x= 5
// function f() {
//     x= 8
// }

// function f1(x){
//     x=7
//     return x
// }

// function f2(){
//     f()
//     f1()
//     console.log(x)
// }

// // console.log(f1())
// f2()

// let a = []

// console.log(a[0])


// function sum(arr) {
//     if(arr.length === 1){
//         return arr[0]
//     }
//     return arr.pop()+ sum(arr)
    
// }

// console.log(sum([1,2,3,4,5,6]))


// const x = 90;
// function f(x) {
//     return function(y){
//         console.log(y)
//         return function(z){
//             console.log(z)
//             return (x+y)/z
//         }
//     }
   
    
// }
// console.log(f(2))


// function a(x) {
//     a = false
//     if(!x){
//       a = true
//       console.log(a)
//     }
//     return a
    
// }

// console.log( a(null))
// function n(a,b) {
//     return (a+b)
// }


// function fu(params) {
//     const a = []
//     console.log(a)
//     return function (...args) {
//         a.push(args)
//         this.get = a
//         return this
//     }


    
// }
// let b = fu(n)

// b(1,2)
// b(3,4)
// console.log(b().get)


// console.log(14/2)

// var twoSum = function(nums, target) {
//     const ountpyt =[]
//     nums.forEach((value,index)=>{
     
//         if(nums.indexOf(target-value) !== -1 && nums.indexOf(target-value) !== index ){
//             console.log(ountpyt.length)
//             if(ountpyt.length === 0){
//             ountpyt.push(nums.indexOf(target-value),index)
        
//             }
//         }
        
//     })
//     return ountpyt
// };

// console.log(twoSum([3,2,4],6))



// var addTwoNumbers = function(l1, l2) {
//     let number1 = ''
//     let number2 = ''
//     let lengthFor = 0
//     if(l1.length > l2.length)lengthFor = l1.length
//     else lengthFor = l2.length
//     for(let i = 0 ; i<=lengthFor; i++){
//         if(l1[i] !== undefined){
//         number1 += l1[i]
//         }
//         if(l1[i] !== undefined){
//         number2 += l2[i]
//         }
//     }
   
//     let k = +number1+ +number2
    
//    return  Array.from(`${k}`)
// };


// console.log(addTwoNumbers([2,4,3],[5,6,4]))


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // function to check even numbers
// function checkEven(number) {
//   if (number % 2 == 0)
//     return true;
//   else
//     return false;
// }

// // create a new array by filter even numbers from the numbers array
// let evenNumbers = numbers.filter(checkEven);
// console.log(evenNumbers);

// Output: [ 2, 4, 6, 8, 10 ]



// const mySearch = (arr,value) => {
//   let index = Math.floor(arr.lenght / 2)
//   // console.log(Math.round(index))
//   if(arr[index]<value){
//     index = index*2
//     return mySearch(arr,value)
//   }
//   else if(arr[index]<value){
//     index = index/2
//     return mySearch(arr,value)
//   }
//   else{
//     return arr[index]
//   }
// }

// console.log(mySearch([1,2,3,4,5,6,7],6))





// class Queue{
//   storage=[]
//   enqueue(value){
//     this.storage.unshift(value)
//   }
//   dequeue(){
//     return this.storage.pop()
//   }
//   isEmpty(){
//     return this.storage.length
//   }
//   peek(){
//     return this.storage[this.storage.length-1]
//   }
// }

// class Steck{
//   storage=[]
//   push(value){
//     this.storage.push(value)
//   }
//   pop(){
//     return this.storage.pop()
//   }
//   isEmpty(){
//     return this.storage.length
//   }
//   peek(){
//     return this.storage[this.storage.length-1]
//   }
// }

// let steck = new Steck()

// function foo(value) {
//   for (let i of value){
//   let index = value.indexOf(i)
//     if(index % 2 === 0) {
//       steck.push(index + 1)
//     } else {
//       if(steck.pop() !== index) {
//         return false;
//       }
//   }
// }
// return steck.isEmpty() === 0
// }



// console.log(foo('{]'))
// console.log(foo('{}'))
// console.log(foo('{{}(){}{'))
// console.log(foo('{}([{}]){}'))
// console.log(foo('{}([{}])[({}'))


// var longestPalindrome = function(s) {
//     let output = ""
//     let max = ""
//     for(let i = 0; i < s.length ; i++){

//         if(s.indexOf(s[i]) !== s.lastIndexOf(s[i])){
//             if(s.indexOf(s[i])+2 === s.lastIndexOf(s[i])){
//               console.log(s[i]);
//               output += s[i]
//               output += s[i+1]
//               output += s[i+2]
              
//               if(max.length < output.length){
//                 max = output
//             }
//             output = ""
//             }
//             else{
//               output += s[i]
//             }
//         }
//         else{
//             output = ""

//         }
        
//     }
//     return max
// };

// console.log(longestPalindrome('babasddsa'),'sss')
str = "" + 10
let a = str.split("").reverse().join("")
console.log(a)