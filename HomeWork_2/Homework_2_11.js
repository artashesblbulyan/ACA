// Exercise 11
// Create a function that takes an array of numbers nums as an argument. Square each
// number in the array if the number is even and square root the number if it is odd. Return the
// sum of the new array rounded to two decimal places.



function evenOddTransform(array){
    let result = 0
        for (let i = 0; i < array.length; i++) {
            
            if(array[i] % 2 === 0){
                k += array[i] ** 2
            }else{
                k += array[i] ** 0.5
            }
         
           
        }
   
    return result.toFixed(2)
}
console.log(evenOddTransform([1, 3, 3, 1, 10]))