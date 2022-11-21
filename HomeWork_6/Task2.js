
class abstract {
    constructor(){
     if(new.target === abstract){
        // console.error('asdasd',new.target,this)
        throw  new Error('error')
    }else{
        console.log("helllo",new.target)
    }
}
}


// let a = new abstract()

class as extends abstract{

}

let b = new as()
// console.log(a)