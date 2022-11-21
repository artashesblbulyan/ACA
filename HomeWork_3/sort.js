// sort()
// 24. Using sort, Write a JavaScript function to get the max
// element of an array of numbers

function maxElementArray(array){
    return array.sort((a,b) => b-a)[0]
}
// console.log(maxElementArray([1,2,4,5,8,7,9,15,25,7,9]))

// 25. Using sort, Write a JavaScript function to get the min
// element of an array of numbers

function minElementArray(array){
    console.log(array.sort(function(a,b) { console.log(a,b)}))
    return array.sort(function(a,b) {return  a-b})[0]
}
// console.log(minElementArray([1,2,4,5,8,7,9,15,25,7,9]))

// 26. Using sort, Write a JavaScript function to sort the
// collection of employees by their name
function sortName(array){
    return array.sort()
}
// console.log(sortName(['wasc','Asdvf','sdfgsdfg','qweeqw','rtyhrtyh']))

// 27. *** Create a custom Array.prototype.mySort should work
// similarly to Array.prototype.sort


Array.prototype.mySort = function(cb){
    let result
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if(cb){
                 result = cb(this[i],this[j])
            }
            else{
                result = String(this[j])[0] > String(this[i])[0]    
            }
            if(result > 0){
                let k = this[j]
                let d = this[i]
                this[j] = d
                this[i] = k
            }  
        }
    }
    return this
}

console.log(["D","F","W","R","K","T","A","B","C","D","V","Q"].mySort())

console.log([50,2,1,-7,7,2,74,7,4,5,0,7,5,6,3,4,5,78].mySort((a,b)=> b-a))
console.log([50,2,1,-7,7,2,74,7,4,5,0,7,5,6,3,4,5,78].mySort())
