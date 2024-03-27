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
            img.src = "";

            x.appendChild(img);
            x.appendChild(document.createElement("p"));
        }
    }
}