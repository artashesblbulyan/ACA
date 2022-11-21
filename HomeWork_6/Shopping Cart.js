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
        Product.products.push(this)
        
    }
}

class ShoppingCart{
    constructor(){
        this.shopProduct = []
        this.totalSum = 0
    }
    addProduct(product){
        let result = Product.products.filter(elem => elem.name === product.name)
        if(result[0]){
            this.shopProduct.push(product)
            const index = Product.products.indexOf(product);
            Product.products.splice(index, 1);
                }
        else{
            console.log("product is sold out" )
        }
    }
    removeProduct(product){
        let result = this.shopProduct.filter(elem => elem.name === product.name)
        if(result[0]){
            Product.products.push(product)
            const index = this.shopProduct.indexOf(product);
            this.shopProduct.splice(index, 1);
                }
        else{
            console.log("as" )
        }
    }
    totalPrice(){
        let k  = []
        this.shopProduct.forEach(elem =>{
            const result = this.shopProduct.filter(el => elem.name === el.name)
            if(result.length > 3 && k.indexOf(result[0].name) === -1){
                k.push(result[0].name)
                this.totalSum += elem.price * result.length-Math.floor(result.length / 4)}
            else if (result.length > 3 && k.indexOf(result[0].name) !== -1){
                return
            }
            else{
                this.totalSum +=elem.price
        }
    })
        if(this.shopProduct.length > 4){
            this.totalSum = this.totalSum - (this.totalSum * 10 /100)
        }
        return this.totalSum
    }
    replace(productName, replacementProduct){
        let result = this.shopProduct.filter(elem => elem.name === productName)
        console.log(result)
        if(result[0]){
            const index = this.shopProduct.indexOf(result[0]);
            this.shopProduct.splice(index, 1,replacementProduct);
                }
        else{
            console.log("as" )
        }
            
    }

}

let a = new Product('product 1','type 1',1)
let b = new Product('product 2','type 2',1)
let d = new Product('product 3','type 3',1)
let j = new Product('product 3','type 3',1)
let k = new Product('product 3','type 3',1)
let m = new Product('product 3','type 3',1)
let f = new Product('product 4','type 4',1)
let g = new Product('product 5','type 5',1)
let z = new Product('product 5','type 5',1)
let x = new Product('product 5','type 5',1)
let c = new Product('product 5','type 5',1)
let v = new Product('product 5','type 5',1)
let n = new Product('product 5','type 5',1)

let q = new ShoppingCart()
// q.addProduct(a)
q.addProduct(b)
q.addProduct(d)
q.addProduct(j)
q.addProduct(k)
q.addProduct(z)
q.addProduct(x)
q.addProduct(c)
q.addProduct(v)
q.addProduct(n)
q.addProduct(m)

q.addProduct(f)
q.addProduct(g)
q.replace('product 2',a)
console.log(q,q.totalPrice())