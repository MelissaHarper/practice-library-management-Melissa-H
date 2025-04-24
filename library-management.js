class LibraryItem {
    
    // Constructor
    constructor (type, title, id, isAvailable) {
        this.type = type
        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;        
    //     this.inventory = inventory.push(this); -code for something I'm experimenting with

     }

    // Methods
        
    //-code for something I'm experimenting with
    // lookupItem() {        
    //     let item = inventory.filter(items => items.includes(input));
    //     //console.log(item)
    //     return item
    // }

    checkOut() {
        if (this.isAvailable) {       
            console.log(`You have checked out: ${this.title}`);            
            return this.isAvailable = false;        
        } else {
            console.log(`${this.title} is not available to be checked out at this time.`)
        }
    }

    returnItem() {
        // let toReturn = this.lookupItem(input)-code for something I'm experimenting with
        if (!this.isAvailable) {                   
            console.log(`You have returned; ${this.title}`)
            return this.isAvailable = true;
        } else {
            console.log(`${this.title} is not checked out at this time.`)
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
}

class DVD extends LibraryItem {

    // Constructor
    constructor (title, id, isAvailable, director, duration, copies = 1) {
        super("dvd", title, id, isAvailable);
        this.director = director;
        this.duration = duration;
        this.copies = copies;
    } 

    // Methods
    checkOut() {
        if (this.isAvailable) {               
            this.copies -= 1;
                if (this.copies === 0){
                    this.isAvailable = false;
                }
            console.log(`You have checked out: ${this.title}`);    
        } else {
            console.log(`${this.title} is not available to be checked out at this time.`)
        }
    }

    returnItem() {
        // let toReturn = this.lookupItem(input)-code for something I'm experimenting with
        if (!this.isAvailable) {               
            this.copies += 1;                  
            console.log(`You have returned; ${this.title}`)
            return this.isAvailable = true;
        } else {
            console.log(`${this.title} is not checked out at this time.`)
        }

    }

}

class Magazine extends LibraryItem {

    constructor (title, id, isAvailable, issueNumber, publisher = null) {
        super("magazine", title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    } 

   
}
//let inventory = [];-code for something I'm experimenting with

let hyperboleAndAHalf = new Book("Hyperbole and a Half", 1, true, "Allie Brosch", ["comedy", "self help"]);
let fineWoodworking = new Magazine("Fine Woodworking", 2, true, 23);
let debs = new DVD("D.E.B.S", 3, true, "That Person", 90, 1);

// hyperboleAndAHalf.checkOut();
// hyperboleAndAHalf.checkOut();
console.log(debs.copies);
debs.checkOut();
console.log(debs.copies);
hyperboleAndAHalf.checkOut();
debs.returnItem();
console.log(debs.copies);
hyperboleAndAHalf.returnItem();
hyperboleAndAHalf.returnItem();


// console.log(hyperboleAndAHalf.author);
// console.log(debs.duration);
// console.log(fineWoodworking.issueNumber);
// console.log(fineWoodworking.issueNumber);

