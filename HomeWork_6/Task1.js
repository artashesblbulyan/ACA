// Create a constructor CoffeeShop, which has three properties:
// ● name : a string (basically, of the shop)
// ● menu : an array of items (of object type), with each item containing the item (name of
// the item), type (whether food or a drink) and price.
// ● orders : an empty array
// and seven methods:
// ● addOrder: adds the name of the item to the end of the orders array if it exists on the
// menu. Otherwise, return "This item is currently unavailable!"
// ● fulfillOrder: if the orders array is not empty, return "The {item} is ready!".
// If the orders array is empty, return "All orders have been fulfilled!"
// ● listOrders: returns the list of orders taken, otherwise, an empty array.
// ● dueAmount: returns the total amount due for the orders taken.
// ● cheapestItem: returns the name of the cheapest item on the menu.
// ● drinksOnly: returns only the item names of type drink from the menu.
// ● foodOnly: returns only the item names of type food from the menu.
// IMPORTANT:
// Orders are fulfilled in a FIFO (first-in, first-out) order.
// Notes:
// You can create another constructor for menu items.
// Example:
// tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// // Tesha's coffee shop does not sell hot cocoa
// tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// // specifying the variant of "iced tea" will help the process
// tcs.addOrder("cinnamon roll") ➞ "Order added!"
// tcs.addOrder("iced coffee") ➞ "Order added!"
// tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// // the list of all the items in the current order
// tcs.dueAmount() ➞ 2.17
// tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
// tcs.fulfillOrder() ➞ "The iced coffee is ready!"
// tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// // all orders have been presumably served
// tcs.listOrders() ➞ []
// // an empty array is returned if all orders have been exhausted
// tcs.dueAmount() ➞ 0.0
// // no new orders taken, expect a zero payable
// tcs.cheapestItem() ➞ "lemonade"
// tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice",
// "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot
// chocolate", "iced coffee"]
// tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon
// and egg", "steak", "hamburger", "cinnamon roll"]




class CoffeeShop{
    constructor(name,menu){
        this.name = name
        this.menu = menu.products
        this.orders = []
        // console.log(menu.products)
    }
    addOrder(productName){
        let ord = false
        for(let i of this.menu){
            if(i.name === productName){
                // console.log(this.menu.name)
                this.orders.push(i)
                ord = true
                
            }
            
        }
        if(ord){
            console.log("Order added!")
        }
        else{
            console.log("This item is currently unavailable!")
        }
    }
    fulfillOrder(){
        if(this.orders[0]){
            console.log(`The ${this.orders[0].name} is ready!`)
            this.orders.shift()
        }
        else{
           console.log("All orders have been fulfilled!")
        }
    }
    listOrders(){
            console.log(this.orders.map(elem => elem.name))
        
    }
    dueAmount(){
        let sum  = 0
        for(let i of this.orders){
          sum += i.price
        }
        console.log(sum)
    }
    cheapestItem(){
        let min  = this.orders[0]
        for(let i of this.orders){
          if(i.price < min.price){
            min = i
          }
        }
        console.log(min.name)
    }
    drinksOnly(){
        console.log(this.orders.filter(elem => elem.type === 'drink').map(el=>el.name))
    }
    foodOnly(){
        console.log(this.orders.filter(elem => elem.type === 'food').map(el=>el.name))
    }

}

class MenuShop{
    constructor(){
      this.products = []
    }
    addMenu(name,type,price){
        this.products.push({name:name,type:type,price:price})
    }

}

let menu = new MenuShop()
menu.addMenu("cinnamon roll","food",2)
menu.addMenu("iced coffee","drink",1.25)
menu.addMenu("lemonade","drink",2.1)
menu.addMenu("tuna sandwich","food",2.5)
menu.addMenu("bacon","food",4.7)

// console.log(menu)

let shop = new CoffeeShop("hello",menu)
shop.addOrder("cinnamon roll")
shop.addOrder("lemonade")
shop.addOrder("iced coffee")
shop.addOrder("bacon")
shop.listOrders()
shop.dueAmount()
// shop.fulfillOrder()
// shop.fulfillOrder()
// shop.fulfillOrder()
shop.listOrders()
shop.dueAmount()
shop.cheapestItem()
shop.drinksOnly()
shop.foodOnly()
// console.log(shop)