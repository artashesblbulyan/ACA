// Exercise 1
// Write a JavaScript function to print an integer with commas as thousands separators

 function thousandsSeparators(number){
    let strNumber = String(number)
    let result =""
    for (let i = 0; i < strNumber.length; i++){
        result += strNumber[i]
        if((strNumber.length - i) % 3 === 1 && strNumber.length - 1 !== i){
            result += ","
        }
        
    }
    return result
 }

 console.log(thousandsSeparators(100000))