// Exercise 5
// Create a function that receives an object and returns the clone of it.  The returned object
// should have the same properties as the original one.
// This exercise has no one correct solution. Feel free to research some resources while
// solving this exercise.
// Note:
// let a = {}
// let b = myClone(a)


function myClone(obj) {
    const newObj = {}
   let k =  Object.keys(obj).forEach((value,index)=>{
        if(typeof obj[value] === "object" && !Array.isArray(obj[value]) && obj[value] !== null){
            newObj[value] = myClone(obj[value])
            return myClone(obj[value])
        }
        newObj[value] = obj[value]
    })
    return newObj
    
}


const o = {a:'Artashes',h:function name(params) {
},k:null,f:{asa:'kkkkk',fg:{we:'aa'}}}

 const f = myClone(o)
// console.log(f)

// f.f.asa = 'dd'
f.f.fg.we = 'rr'
f.k = 40
o.f.asa = 'dds'
// f.f.s = 5

console.log('f',f)
console.log('o',o)
console.log(typeof myClone)

