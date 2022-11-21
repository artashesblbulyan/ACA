// Exercise 4
// From the given array of numbers and strings create 2 new arrays, one containing only
// numbers, another one only strings.


function numberString(array){
    const number = []
    const string = []
    for(let inx = 0; inx < array.length; inx++){ 
        if(isNaN(array[inx])){
            string.push(array[inx])
        }
        else{
            number.push(array[inx])
        }
        
    }
    console.log(number,string)
}

numberString(['s','1','a','2','4',1 ,5 ,'w'])
