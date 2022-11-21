// Task 3
// Create a TV() constructor with properties like brand, channel and volume.
// ● Specify brand in a constructor parameter. Channel should be 1 by default. Volume
// should be 50 by default.
// ● Add methods to increase and decrease volume. Volume can't never be below 0 or
// above 100.
// ● Add a method to set the channel. Let's say the TV has only 50 channels so if you try
// to set channel 60 the TV will stay at the current channel.
// 10.07.2022
// ● Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint:
// consider using it from the constructor).
// ● It's useful to write a status that returns info about the TV status like: "Panasonic
// at channel 8, volume 75".



function Tv(brand,channel,volume){
    this.reset = function(){
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

}

Tv.prototype.volumeIncrease = function(){
    if(this.volume <= 100){
    this.volume ++
    }
}
Tv.prototype.volumeDecrease = function(){
    if(this.volume >= 0){
    this.volume --
    }
}
Tv.prototype.channelChang = function (chan){
    if(chan <= 50 && chan >= 0){
        this.channel = chan
    }
    
}

const a = new Tv('Samsung')
a.volumeDecrease()
a.channelChang(48)
a.reset()
a.channelChang(7)
// a.reset()
// console.log(a)




function Product(name,type,price){
    this.name = name
    this.type = type
    this.price = price
    this.count = 1
}


const pencil = new Product("pen",'pencil',50)
const p = new Product("p",'pencil',40)
// console.log(pencil)
function ShoppingCart(){
    this.products = []
}

ShoppingCart.prototype.addProduct = function(product){
    console.log(this.products)
    console.log(product)
    if(this.products[0]){
    for(let pr of this.products){
        if(this.products.name === pr.name){
            pr.count++
        }
        else{
            this.products.push(product)
        }
            }
        }
    else{
        this.products.push(product)
    }
    
}
ShoppingCart.prototype.removeProduct = function(product){
    this.products = this.products.filter(elem => elem === product)
    
    // console.log(this.products,product)
}
ShoppingCart.prototype.totalPrice = function(){
    this.products
    
    // console.log(this.products,product)
}


let b = new ShoppingCart()
b.addProduct(pencil)
b.addProduct(pencil)

b.addProduct(p)
// b.addProduct(pencil)
// b.removeProduct(pencil)
console.log(b)