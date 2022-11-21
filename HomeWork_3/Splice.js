// splice()
// 17. Using the splice method, write a function that will fill the
// missing numbers of a sorted array of numbers, to make it
// consecutive.
// Example: [1,2,3,6] should become [1,2,3,4,5,6]

function missingNumber(array){
    let k = array[array.length-1] + array[0]
    for (let i = 0; i < k-1; i++) {
            array.splice(i,1,i+1)
         }
    return array
    }

console.log(missingNumber([1,3,6]));
// 18. Using the splice method, create a function which is removing
// duplicated numbers from a sorted array of numbers

function duplicatedRemove(array){
    const newArray1 =[...array]
    const newArray =[]
    for (let i = 0; i < newArray1.length; i++) {
        if(newArray.indexOf(newArray1[i]) === -1){
            newArray.push(newArray1[i])
        }else{
            array.splice(newArray.indexOf(newArray1[i]),1)
        }
    }
    return array
}
// console.log(duplicatedRemove([1,1,3,6,6,6,6,7,8,9,5,9]));

// 19. ** Create a custom Array.prototype.mySplice should work
// similarly to Array.prototype.splice


Array.prototype.mySplice = function(index,del,...args){
const arr =[...this]
for (let i = 0,j = 0 ;i < arr.length+args.length-del; i++) {
    if(i >= index && i < index+args.length){
        this[i] = args[j]
        j++
    }
    else if(i < index){
        this[i] = arr[i]}
    else{
        if(del > 0){
            this[i] = arr[i-args.length+del]
        }else{
            this[i] = arr[i-args.length]
        }  
    }
}
this.length = arr.length+args.length-del
return this
}
// let k=arr.splice(0,2,7)
console.log([1,2,3,4,5].mySplice(0,1))

