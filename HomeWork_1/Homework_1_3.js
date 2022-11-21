// Exercise 3
// From the given array of numbers create two arrays one containing only odd and the other
// only even numbers

function oddEven(array){
    const even = []
    const odd = []
    for(let inx = 0; inx < array.length; inx++){ 
        if(array[inx] % 2 === 0){
            even.push(array[inx])
        }
        else{
            odd.push(array[inx])
        }
    }
    return [even,odd]
}
console.log(oddEven([14, 28, 3, 8, 2] ));

