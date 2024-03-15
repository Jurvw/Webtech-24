//set bools to be able to switch between states
var imgSize = false;
var coverVersion = false;

document.addEventListener('DOMContentLoaded', function() {
    //get the relevant elements
    var scrollDiv = document.getElementsByTagName("aside")[0];
    var coverImage = document.getElementById("book-cover__image");

    //add the eventlistener to (un)zoom the image
    coverImage.addEventListener("click", zoomImg, false);

    //add the evenlistener to switch between different versions of the cover
    scrollDiv.addEventListener("click", scrollBookImg, false);

    function scrollBookImg(event) {
        //changes the source of the image to a different one if the state is changed by clicking
        if (coverVersion) {
            coverImage.src = "../img/lotr_return_of_the_king_cover.jpg";
        }
        else {
            coverImage.src = "https://m.media-amazon.com/images/I/41KPaTTRxFL.jpg";
        }

        //update the current state
        coverVersion = !coverVersion;
    }

    function zoomImg(event) {
        //changes the size of the image depending on it's current state
        if (imgSize) {
            event.target.width /= 2;
            event.target.height /= 2;
        }
        else {
            event.target.width *= 2;
            event.target.height *= 2;
        }

        //update the current state
        imgSize = !imgSize;
        
        //cancel the switching of the source of the image when both are called
        event.stopPropagation();
    }
});