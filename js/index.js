var imgSize = false;
var coverVersion = false;

document.addEventListener('DOMContentLoaded', function() {
    var zoomDiv = document.getElementById("book-cover");
    var coverImage = document.getElementById("book-cover__image");

    zoomDiv.addEventListener("click", zoomImg, false);

    var scrollDiv = document.getElementsByTagName("aside")[0];
    scrollDiv.addEventListener("click", scrollBookImg, false);

    function scrollBookImg(event) {
        if (coverVersion) {
            coverImage.src = "../img/lotr_return_of_the_king_cover.jpg";
        }
        else {
            coverImage.src = "https://m.media-amazon.com/images/I/41KPaTTRxFL.jpg";
        }
        coverVersion = !coverVersion;
    }

    function zoomImg(event) {
        if (imgSize) {
            event.target.width /= 2;
            event.target.height /= 2;
        }
        else {
            event.target.width *= 2;
            event.target.height *= 2;
        }

        imgSize = !imgSize;
        
        event.stopPropagation();
    }
});