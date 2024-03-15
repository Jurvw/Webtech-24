function generateText() {
    //create variables in the right scope to access later
    var book;
    var publisher;
    var author;
    
    //calls function to create instances of the classes book, author and publisher
    createInstances();

    //creates html elements and thus visual representation from the created instance of the book class
    createBookElements(book);

    //creates html elements and thus visual representation from the created instance of the author class
    createAuthorElements(author);

    //creates html elements and thus visual representation from the created instance of the publisher class, needs the created instance of the book class for the title of the book
    createPublisherElements(book, publisher);

    function createBookElements(book) {
        //gets the html element to edit the contents of
        var article = document.getElementById("book-info");

        //create title
        var h = document.createElement("h3");
        h.innerText = book.getTitle;
        
        //create the image of the cover
        const coverImage = document.createElement("img");
        coverImage.title = "Cover of " + book.getTitle;
        coverImage.src = book.getCover;

        //create the line about the author(s)
        var p1 = document.createElement("p");
        p1.innerText = "Author(s): " + book.getAuthors[0];

        //set the title of the Author name to some information
        var title = "Year of birth: " + author.getYearOfBirth + "\n\n";
        title += "Books written by J.R.R. Tolkien:\n";
        for (var i = 0; i < author.getBooks.length; i++) {
            title += author.getBooks[i]+"\n";
        }
        p1.title = title;

        //create line about the year of creation
        var p2 = document.createElement("p");
        p2.innerText = "Year of creation: " + book.getCreationYear;

        //create line about genre of the book
        var p3 = document.createElement("p");
        p3.innerText = "Genre: " + book.getGenre;

        //creates lines about the plot
        var p4 = document.createElement("p");
        p4.innerText = "Plot: " + book.getPlot;

        //appends all different parts of the information to the article
        article.appendChild(h);
        article.appendChild(coverImage);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
    }

    function createAuthorElements(author) {
        var authorAside = document.getElementById("author-aside");
        var p = document.getElementById("author-info");

        const authorImage = document.createElement("img");
        authorImage.setAttribute("src", "https://static.wikia.nocookie.net/tolkien-online/images/e/e5/J.R.R._Tolkien.jpg/revision/latest/scale-to-width-down/1000?cb=20170402191335&path-prefix=nl");
        authorImage.setAttribute("style", "width:250px;height:356px;");
        authorImage.setAttribute("class", "center");

        authorAside.appendChild(authorImage);

        var title = "Year of birth: " + author.getYearOfBirth + "\n\n";
        title += "Books written by J.R.R. Tolkien:\n";
        for (var i = 0; i < author.getBooks.length; i++) {
            title += author.getBooks[i]+"\n";
        }
        authorImage.title = title;

        var name = document.createElement("span");
        name.innerText = "Author: " + author.getName;
        name.title = title;

        const wikilink = document.createElement("a");
        wikilink.setAttribute("href", author.getWikiLink);
        wikilink.innerText = ("Wikipedia page author");

        p.appendChild(name);
        p.appendChild(document.createElement("br"));
        p.appendChild(wikilink);
        
        authorAside.appendChild(p);
    }

    function createPublisherElements(book, publisher) {
        //gets the paragraph which will be edited
        var p = document.getElementById("publisher-info");

        //get the values in convenient const
        const name = publisher.getName;
        const wikiPage = publisher.getWikiPage;
        const books = publisher.getBooks;

        //create a string to parse the list of books in an easily readable sentence
        var booksString = "";
        for (var i = 0; i < books.length - 2; i++) {
            booksString += books[i] + ", " + "\n";
        }
        booksString += books[books.length - 2] + " and " + books[books.length - 1];

        //set the first part of the paragraph
        p.innerText = book.getTitle + " is published by ";

        //create a span to add a title later
        var nameSpan = document.createElement("span");
        nameSpan.innerText = name;

        //add a title for more information about the publisher
        nameSpan.title = "Works by this publisher are: " + "\n" + booksString;

        //add the span to the paragraph
        p.appendChild(nameSpan);

        //add the text in between the wiki-link and the span
        const bridgeText = document.createTextNode(". For more information: ");
        p.appendChild(bridgeText);

        //add the wiki-link to the paragraph
        var publisherWikiLink = document.createElement("a");
        publisherWikiLink.href = wikiPage;
        publisherWikiLink.innerText = "Their Wikipedia page";
        p.appendChild(publisherWikiLink);
        p.appendChild(document.createTextNode("."));
    }

    function createInstances() {
        const plot = '"The Lord of the Rings: The Return of the King" concludes J.R.R. Tolkien\'s epic fantasy trilogy with the final chapter of the War of the Ring. The story follows the efforts of the Fellowship as they strive to defeat the dark forces of Sauron and bring peace to Middle-earth. As the fate of the realm hangs in the balance, heroes emerge and sacrifices are made in a climactic battle between good and evil.';
        book = new Book(["J.R.R Tolkien"], 1955, "Lord of the Rings: The Return of the King", "Fantasy", "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_Return_of_the_King_cover.gif/220px-The_Return_of_the_King_cover.gif", plot);
        
        const publisherBookList = [
            "The Lord of Rings: Return of the King",
            "Pheasants Nest",
            "All the Words We Know",
            "Plot Twist",
            "Southeast Asia",
            "Thanks for Having Me",
            "Ten Steps to Nanette",
            "Menopause Brain",
            "Strap Yourself In",
            "Diggers of Kapyong"
        ];
        publisher = new Publisher("George Allen and Unwin", "https://en.wikipedia.org/wiki/Allen_%26_Unwin", publisherBookList);

        const tolkienBooks= [
            "Beowulf: The Monsters and the Critics",
            "On Fairy-Stories",
            "The Father Christmas Letters",
            "Mr. Bliss",
            "Roverandom",
            "Leaf by Niggle",
            "The Adventures of Tom Bombadil",
            "Smith of Wootton Major",
            "Farmer Giles of Ham",
            "The Hobbit",
            "The Lord of the Rings"];
        author = new Author("J.R.R. Tolkien", 1892, tolkienBooks, "https://en.wikipedia.org/wiki/J._R._R._Tolkien");
    }
}

class CreativeWork {
    #authors;
    #creationYear;
    #title;

    constructor(authors, creationYear, title) {
        this.#authors = authors;
        this.#creationYear = creationYear;
        this.#title = title;
    }

    get getAuthors() {
        return this.#authors;
    }

    set setAuthors(authors) {
        this.#authors = authors;
    }

    get getCreationYear() {
        return this.#creationYear;
    }

    set setCreationYear(cy) {
        this.#creationYear = cy;
    }
    
    get getTitle() {
        return this.#title;
    }

    set setTitle(title) {
        this.#title = title;
    }
}

class Book extends CreativeWork {
    #genre;
    #cover;
    #plot;

    constructor(authors, creationYear, title, genre, cover, plot) {
        super(authors, creationYear, title);
        this.#genre = genre;
        this.#cover = cover;
        this.#plot = plot;
    }

    get getGenre() {
        return this.#genre;
    }

    set setGenre(genre) {
        this.#genre = genre;
    }

    get getCover() {
        return this.#cover;
    }
    
    set setCover(cover) {
        this.#cover = cover;
    }

    get getPlot() {
        return this.#plot;
    }
    
    set setPlot(plot) {
        this.#plot = plot;
    }
}

class Person {
    #name;
    #yearOfBirth;

    constructor(name, yob) {
        this.#name = name;
        this.#yearOfBirth = yob;
    }

    get getName() {
        return this.#name;
    }

    set setName(name) {
        this.#name = name;
    }

    get getYearOfBirth() {
        return this.#yearOfBirth;
    }

    set setYearOfBirth(yob) {
        this.#yearOfBirth = yob;
    }
}

class Author extends Person {
    #books;
    #wikiLink;

    constructor(name, yob, books, wikilink) {
        super(name, yob);
        this.#books = books;
        this.#wikiLink = wikilink;
    }

    get getBooks() {
        return this.#books;
    }

    set setBooks(books) {
        this.#books = books;
    }

    get getWikiLink() {
        return this.#wikiLink;
    }
    
    set setWikiLink(wl) {
        this.#wikiLink = wl;
    }
}

class Company {
    #name;
    #wikiPage;

    constructor(name, wikiPage) {
        this.#name = name;
        this.#wikiPage = wikiPage;
    }

    get getName() {
        return this.#name;
    }

    set setName(name) {
        this.#name = name;
    }

    get getWikiPage() {
        return this.#wikiPage;
    }

    set setWikiPage(wp) {
        this.#wikiPage = wp;
    }
}

class Publisher extends Company {
    #books;

    constructor(name, wikiPage, books) {
        super(name, wikiPage);
        this.#books = books;
    }

    get getBooks() {
        return this.#books;
    }

    set setBooks(books) {
        this.#books = books;
    }
}