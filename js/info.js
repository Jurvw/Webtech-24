function generateText() {
    var book;
    var publisher;
    var author;

    var newPar = document.createElement("img");
    //newPar.setAttribute("src", "../img/J.R.R.Tolkien.jpg");
    const aside = document.getElementsByTagName("aside")[0];
    aside.appendChild(newPar);
    const test = document.getElementById("test_p");
    
    createInstances();
    test.innerText = book.getTitle;

    createBookElements(book);

    function createBookElements(book) {
        //const article = document.getElementById("book-article");
        table = document.getElementById("book-info");

        //const title = document.createElement("h3");
        //title.innerText = book.getTitle;

        //const coverImage = document.createElement("img");
        //coverImage.setAttribute("src", book.getCover);

        //const infoSection = document.createElement("section");

        var rows = [];
        for (var i = 0; i < 6; i++) {rows[i] = document.createElement("tr")}

        var cells = [];
        for (var i = 0; i < 5; i++) {cells[i] = document.createElement("td")}

        const header = document.createElement("th");

        header.innerText = book.getTitle;

        const coverImage = document.createElement("img");
        coverImage.setAttribute("src", book.getCover);
        cells[0].appendChild(coverImage);

        cells[1].innerText = "Author(s): " + book.getAuthors[0];
        cells[2].innerText = "Year of creation: " + book.getCreationYear;
        cells[3].innerText = "Genre: " + book.getGenre;
        cells[4].innerText = "Plot: " + book.getPlot;

        rows[0].appendChild(header);
        for (var i = 0; i < cells.length; i++) {
            rows[i + 1].appendChild(cells[i]);
        }

        for (var i = 0; i < rows.length; i++) {table.appendChild(rows[i])}

        //article.appendChild(title);
        //article.appendChild(coverImage);
    }
    

    function createInstances() {
        const plot = '"The Lord of the Rings: The Return of the King" concludes J.R.R. Tolkien\'s epic fantasy trilogy with the final chapter of the War of the Ring. The story follows the efforts of the Fellowship as they strive to defeat the dark forces of Sauron and bring peace to Middle-earth. As the fate of the realm hangs in the balance, heroes emerge and sacrifices are made in a climactic battle between good and evil.';
        book = new Book(["J.R.R Tolkien"], 1955, "Lord of the Rings: Return of the King", "Fantasy", "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_Return_of_the_King_cover.gif/220px-The_Return_of_the_King_cover.gif", plot);
        
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