document.addEventListener('DOMContentLoaded', function() {

    //Get the selectbox from the DOM
    var selectElement = document.getElementById("select-element");
    //get body from DOM and make it a const for further use
    const body = document.body;
    //All the children of body in DOM
    var children = body.children;
    //This function fills the selectbox named select-element with the body and children of body according to DOM
    function buildSelect(){
        //Makes an option for a selectbox
        var bodyOption = document.createElement('option');
        // Fills the option with body
        bodyOption.value = bodyOption.innerHTML = body.tagName;
        //Adds the body option to the select box
        selectElement.appendChild(bodyOption);
        //In this loop we take the ith child and add its name as value and text as an option to the select box.
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var newOption = document.createElement('option');
            newOption.value = child.tagName;
            newOption.innerHTML = child.tagName;
            selectElement.appendChild(newOption);
        }
    }
    buildSelect();
    const button = document.getElementById('change-element');
    button.addEventListener('click', function () {
        // This const holds the index of the select-element selectbox
        const selectedIndex = selectElement.selectedIndex;
        //This does the same as the const above but for the select-change selectbox
        const selectChange = document.getElementById('select-change');
        const selectChangeIndex = selectChange.selectedIndex;
        //We switch on the index of the second selectbox to change element selected in the first selectbox by the value associated with the second selectbox
        switch (selectChangeIndex) {
            case 0:
                // If selectIndex is > 0 that means it is a child and we take the value of that child to the chosen style.
                if (selectedIndex > 0) {
                    children[selectedIndex-1].style.color = "blue";
                }else{ //This means the body is selected and will be changed
                    body.style.color = "blue";
                }
                break;
            case 1:
                if (selectedIndex > 0) {
                    children[selectedIndex-1].style.backgroundColor = "purple";
                }else{
                    body.style.backgroundColor = "purple";
                }
                break;
            case 2:
                if (selectedIndex > 0) {
                    children[selectedIndex-1].style.fontSize = "2.0em";
                }else{
                    body.style.fontSize = "2.0em";
                }
                break;
            default:
                break;
        }
        
    });
});