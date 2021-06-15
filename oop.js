
const _private = new WeakMap();


class Book {
    constructor(title, author, price) {

        const properties = {
            _title: title,
            _author: author,
            _price: price
        }

        _private.set(this, {properties});
    }

    //obtener el titulo de un libro:
    get title(){
        return _private.get(this).properties['_title'];
    }

    //setea/modifica el titulo de un libro:

    set title(newTitle){
        return _private.get(this).properties['_title']=newTitle;
    }




    //obtener el autor de un libro:
    get author(){
        return _private.get(this).properties['_author'];
    }

    //setea/modifica el autor de un libro:

    set author(newAuthor){
        return _private.get(this).properties['_Author']=newAuthor;
    }




       //obtener el precio de un libro:
       get price(){
        return _private.get(this).properties['_price'];
    }

    //setea/modifica el precio de un libro:

    set price(newPrice){
        return _private.get(this).properties['_price']=newPrice;
    }



    getAllData() {
        console.log(`Titulo: ${this.title}, Author: ${this.author}, Precio: ${this.price}`);
    }

}

class Comic extends Book {
    constructor(name, author, price, illustrators) {
        super(name, author, price);
        this.illustrators = [];

    }
    
    addIllustrator(newIllustrator =[]){
            this.illustrators.push(newIllustrator)
    }


    getAllData() {
        super.getAllData();
        console.log(`Illustradores: ${this.illustrador}`);
    }



}





class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(amount, price) {
        //2*150

        this.products.push(...Array(amount).fill(price));
    }

    showProducts() {
        console.log(this.products);
    }






    calcTotal() {
        return this.products
        .map(price =>price)
        .reduce( (ac, price) => ac + price, 0);
    }



    printTicket() {

        console.log(`Total a pagar ${this.calcTotal()}`)
    }

}

//instancia de book
const book1 = new Book('1984', 'G.O', 350);

const comic1 = new Comic('The killing Joke', 'A.M', 150, ['B.B']);


comic1.addIllustrator('J.H');
console.log(comic1.illustrators);

const cart = new ShoppingCart();

cart.addProduct(2, comic1.price);

cart.addProduct(1, book1.price);


cart.showProducts();

cart.printTicket();

book1.getAllData();
comic1.getAllData();