// Exercise 1
// Create a function named myTimeout, which takes two parameters, a callback function
// and an interval duration(milliseconds). After calling the myTimeout function, the callback
// function must be executed after duration time has passed.
// Note:
// Don’t use the setTimeout method

// const foo =()=>{
//     console.log("Helllo")
// }
// console.log('1')
// function myTimeout(callback,time) {
//     return new Promise((resolve, reject) => {
//         const data = new Date()
//         const endTime = data.setMilliseconds(data.getMilliseconds()+time)
//         resolve(function(){
//             do {
//                 const data1 = new Date()
//                 const startTime =data1.setMilliseconds(data1.getMilliseconds());
//                     if(startTime >= endTime ){
//                         return callback ()  
//                     }
//                 } while (time);
//             })
//         })
//         // .then((el)=>{
//         //    el()
//         // })
//     }

// async function a(d,b){
//     let a = await myTimeout(d,b)
//     return a()
// }
     
// console.log('2')

// a(foo,1000)
// for (let index = 0; index < 5000; index++) {
//     console.log(index)
    
// }

// console.log('3')


let itnerval
function myTimeout(callback,time) {
    itnerval =  setInterval(callback, time);
    }
    const foo =()=>{
        console.log("Helllo")
        clearInterval(itnerval)
    }
console.log('2')

myTimeout(foo,1000)

console.log('3')
