// 14. * Create a custom Array.prototype.myUnshift should work
// similarly to Array.prototype.unshift


Array.prototype.myUnshift = function(...args){
    let thisLength = this.length
    this.length  = this.length + args.length
  for (let j = 0; j < this.length; j++) {
    if(j > thisLength-1){
        this[this.length-j-1] = args[this.length-j-1]
    }
    else {
        this[this.length-j-1] = this[thisLength-j-1]
    }
  }
  return this.length
}


const arr = [1,2,3,4]
arr.myUnshift(8,9,'q',23,1,1,2,3)
console.log(arr)