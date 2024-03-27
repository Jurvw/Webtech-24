function generateBooks() {

    createBlocks();
    addContentBlocks();

    function createBlocks() {
        for (var i=0; i<10; i++) {
            books.innerHTML += `<section id="book${i}" class="book-blocks"></section>`;
        }
    }

    function addContentBlocks() {
        for (var i=0; i<10; i++) {
            var x = document.getElementsByClassName("book-blocks")[i];

            var img = document.createElement("img");
            img.src = "https://upload.wikimedia.org/wikipedia/commons/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg";

            x.appendChild(img);
            x.appendChild(document.createElement("p"));
        }
    }
}