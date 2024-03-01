function generateText() {
    generateTest_p();
}

function generateTest_p() {
    const test = document.getElementById("test_p");

    test.innerText = "Test";
}

class creativeWork {
    constructor(authors, creationYear, title) {
        this.authors = authors;
        this.creationYear = creationYear;
        this.title = title;
    }

}

class book extends creativeWork {
    
}

class author extends person {
    constructor(name, yob, books, wikilink) {
        super(name);
        super(yob);
        this.books = books;
        this.wikiLink = wikilink;
    }
}

class person {
    constructor(name, yob) {
        this.name = name;
        this.yearOfBirth = yob;
    }
}

class publisher extends company {
    constructor(name, wikiPage, books) {
        this.name = name;
        this.wikiPage = wikiPage;
        this.books = books;
    }
}

class company {
    constructor(name, wikiPage) {
        this.name = name;
        this.wikiPage = wikiPage;
    }
}