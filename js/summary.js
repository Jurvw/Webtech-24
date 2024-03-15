document.addEventListener('DOMContentLoaded', function() {

    var test = document.getElementById("spoiler-summary").offsetHeight + document.getElementById("spoiler-summary").offsetTop;
    var test2 = document.getElementById("spoiler-free-summary").offsetHeight + document.getElementById("spoiler-free-summary").offsetTop;
    console.log("spoiler (rel): " + test + "nospoiler (static): " + test2);
    var foot = document.getElementsByTagName("footer");
    foot.top = test;
})