// Exercise 7. Shopping Cart
// Create a class Product with properties name, type, and price
// Create a class ShoppingCart
// ● In ShoppingCart, define a method addProduct(product)
// In ShoppingCart, define a method removeProduct(product)
// ● In ShoppingCart, define a method totalPrice(), that returns the total amount of
// the products it contains.
// ● Now let's say that, if you buy 5 products or more, you have a 10% discount. Change
// totalPrice to reflect this calculation.
// ● Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils)
// you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8
// pencils you only pay 6, etc.  Change totalPrice so it considers the free items you
// get. Notice that if you buy 3 pencils you just pay for the 3 of them.
// ● Sometimes a product is sold out and has to be replaced by a new one. Add a method
// replace(productName, replacementProduct) that looks for products with
// productName and replaces them with new instances of the product like
// replacementProduct. Notice that productName is a string, and
// replacementProduct is a Product


class Product{
    static products= []
    constructor(name,type,price){
        this.name = name
        this.type = type
        this.price = price
        this.count = 1
        // console.log(this.name in Product.products);
        if(Product.products.filter(elem => elem.name === this.name)[0]){
        Product.products.forEach(elem =>{
            if(this.name === elem.name){
                elem.count++
            }})   
        }
        else{
            Product.products.push(this)
        }
    }
}

class ShoppingCart{
    constructor(){
        this.shopProduct = []
        this.totalSum = 0
    }
    addProduct(product){
        if(this.shopProduct.filter(elem => elem.name === product.name)[0]){
            this.shopProduct.forEach(elem =>{
                if(product.name === elem.name){
                    Product.products.forEach(el =>{
                        if(product.name === el.name){
                            if(el.count > 0){
                                el.count--
                                elem.count++
                            }
                            else{
                                console.log("product is sold out" )
                            }
                            
                        }})   
                    
                    
                }})   
            }
            else{
                this.shopProduct.push(product)
            }
    }
    removeProduct(product){
        if(this.shopProduct.filter(elem => elem.name === product.name)[0]){
            this.shopProduct.forEach(elem =>{
                if(product.name === elem.name){
                    if(elem.count>0){
                        elem.count--
                    }
                    else{
                        console.log("error")
                    }
                    
                }})   
            }
            else{
                this.shopProduct.push(product)
            }
    }
    totalPrice(){
        this.shopProduct.forEach(elem =>{
            if(elem.count > 3){
            this.totalSum +=elem.price * elem.count-Math.floor(elem.count / 4)
            // console.log(Math.floor(elem.count / 4),elem.count / 4)
            }
        else{
            this.totalSum +=elem.price * elem.count
        }}
            )
        if(this.shopProduct.length > 4){
            this.totalSum = this.totalSum - (this.totalSum * 10 /100)
        }
        return this.totalSum
    }

}

let a = new Product('product 1','type 1',1)
let b = new Product('product 2','type 2',1)
let d = new Product('product 3','type 3',1)
let j = new Product('product 3','type 3',1)
let k = new Product('product 3','type 3',1)
let f = new Product('product 4','type 4',1)
let g = new Product('product 5','type 5',1)

let q = new ShoppingCart()
q.addProduct(a)
q.addProduct(b)
q.addProduct(d)
q.addProduct(d)
q.addProduct(d)
q.addProduct(d)
q.addProduct(d)
q.addProduct(d)
q.addProduct(d)
q.addProduct(d)
q.addProduct(f)
q.addProduct(g)

console.log(Product.products,q.totalPrice(),q)