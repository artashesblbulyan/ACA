// concat()
// 15. Using concat compute the union of two arrays and then remove
// all duplicated items if they exist\\

const array1 = [1,2,3]
const array2 = [4,5,6,1,2,3,2,1]
// const array =  array1.concat(array2)
let filterDuplicated =array1.concat(array2).filter((val,inx,arr) =>arr.indexOf(val) === inx )
console.log(filterDuplicated)

// 16. * Create a custom Array.prototype.myConcat should work
// similarly to Array.prototype.concat


Array.prototype.myConcat = function(...args){
    const newArray = [...this]
    let lengthNewArray = this.length
    for (let i = 0; i < args.length; i++) {
        if(args[i].length){
            for (let j = 0; j < args[i].length; j++) {
                newArray[lengthNewArray+j] = args[i][j]
            }
            lengthNewArray +=args[i].length
        }else{
            newArray[lengthNewArray]=args[i]
            lengthNewArray ++
        }
    }
    return newArray
}
    
    console.log(array1.myConcat([4,5,6],[7,[25]],8,9,10,[65],14,16,17))
 

    