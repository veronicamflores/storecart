//test
console.log('hello from StoreMachine.js')

let product = {
    scienceBook: {
    name:'Science Book',
    img:'https://images-na.ssl-images-amazon.com/images/I/51hyJgRfUCL._SX383_BO1,204,203,200_.jpg',
    price: 15,
    quantity: 12
},

    scketchBook: {
    name:'SketchBook',
    img:'https://us.moleskine.com/ccstore/v1/images/?source=/file/v3335026399130790279/products/gtin_9788862931939_01_1500x1500.jpg&height=500&width=500',
    price: 5,
    quantity: 20 
},
    fictionBook:{
    name:'Fiction Book',
    img:'https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg',
    price: 10,
    quantity: 5
}
}

let cart = []

class StoreMachine{
    constructor(){
        this.till = 0 
        this.subtotal = 0
        this.tax = 0
        this.total = 0

    }
    addCart(item){
        if(item.quantity){
            if(item)
            cart.push(item.scienceBook)
        }
    }
    pay(){
        cart.length = 0
        this.total = 0
        this.tax = 0
        this.subtotal =0
        this.till += this.subtotal
    }
    cartTotal(){
        this.tax = this.subtotal * 0.06
        this.total = this.subtotal + tax
    }
}
export default StoreMachine