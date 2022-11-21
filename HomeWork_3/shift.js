
// 13. * Create a custom Array.prototype.myShift should work
// similarly to Array.prototype.shift


Array.prototype.myShift = function(){
    const result = this[0]
    for (let i = 0 ;i < this.length; i++) {
        this[i]= this[i + 1]
    }
    this.length = this.length-1
    return result
}

const arr =[1,2,3,4,5,6]
console.log(arr.myShift(),arr)