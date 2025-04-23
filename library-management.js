class LibraryItem {
    
    // Constructor
    constructor (type, title, id, isAvailable) {
        this.type = type
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;        
        //this.inventory = inventory.push(this); -code for something I'm experimenting with

    }

    // Methods
        
    //-code for something I'm experimenting with
    // lookupItem() {        
    //     let item = inventory.filter(items => items.includes(input));
    //     //console.log(item)
    //     return item
    // }

    checkOut() {
        //let toCheckout = this.lookupItem() -code for something I'm experimenting with
        if (this.isAvailable) {
            console.log(`You have checked out; ${this.title}`)
            
            return this.isAvailable = false;
        } else {
            console.log(`${this.name} is not available to be checked out at this time.`)
        }
    }

    returnItem() {
        // let toReturn = this.lookupItem(input)-code for something I'm experimenting with
        if (!this.isAvailable) {
            console.log(`You have returned; ${this.title}`)
            return this.isAvailable = true;
        } else {
            console.log(`${this.name} is not checked out at this time.`)
        }

    }
}

class Book extends LibraryItem {
    
    // Constructor
    constructor (title, id, isAvailable, author, genre = []) {
        super("book", title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    } 

    // Method
}

class DVD extends LibraryItem {

    // Constructor
    constructor (title, id, isAvailable, director, duration) {
        super("dvd", title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    } 


}

class Magazine extends LibraryItem {

    constructor (title, id, isAvailable, issueNumber, publisher = null) {
        super("magazine", title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    } 

   
}
// let inventory = [];-code for something I'm experimenting with

let hyperboleAndAHalf = new Book("Hyperbole and a Half", 1, true, "Allie Brosch", ["comedy", "self help"]);
let fineWoodworking = new Magazine("Fine Woodworking", 2, true, 23);
let debs = new DVD("D.E.B.S", 3, true, "That Person", 90);

hyperboleAndAHalf.toCheckout()

// console.log(book1.checkOut());
// console.log(book1);
// console.log(magazine1);
// console.log(dvd1);