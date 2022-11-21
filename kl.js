let arr = new Array(1,2,3,4)
console.log(arr)
console.log(Array.from('foo'))
console.log(Array.isArray({foo: 123}));
console.log(Array.of(7));
console.log('Apple, Banana'.split(', '));
console.log(arr.at(-1));
console.log(arr.copyWithin(0, 3, 6));


function arrLen(array,len){
    const newArray = []
    if(len > array.length-1){
        len = array.length-1
    }
    for (let i = 0; i < len; i++) {
        newArray.push(array[i])
        
    }
    return newArray
}

console.log(arrLen([1,2,3,4,5],10))


function twoArray(arr1,arr2){
    const newArray = arr1
    for (let i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i])=== -1){
                newArray.push(arr2[i])
        }

        
    }
    return newArray
}

console.log(twoArray([1,2,3],[3,4,6,5]));


function removeDuplicates(array){
    const newArray =[]
    for(let i of array){
        if(newArray.indexOf(i) === -1){
            newArray.push(i)
    }
    }
    return newArray

}

console.log(removeDuplicates([1,2,3,4,4,4]));





function special(string){
    const array = ["e.g..", "!", "@", "#", "$",
        "%","^", "&","\\", "*", "(", ")"]
        const str = Array.from(string)
        let result = ""
        for(let i of str){
            if(array.indexOf(i) === -1){
                result += i
        }
        }

        return result
}

console.log(special("asdfasdfasd!@"))



function upperCase(array){

    return array.map(el => el[0].toUpperCase()+ el.slice(1).toLowerCase())
    
}

console.log(upperCase(["mavis", "senaida", "letty"]));



function oddLength(array){
    const newArray = []
    
    for (let i = 0; i < array.length/2; i++) {
        i
        newArray.push([array[i], array[array.length-1-i]])
    }
    return newArray
}

console.log(oddLength([5, 9, 8, 1, 2] ));