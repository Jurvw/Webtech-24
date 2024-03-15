document.addEventListener('DOMContentLoaded', function() {

    var selectElement = document.getElementById("select-element");
    const body = document.body;
    var children = body.children;
    function buildSelect(){
        var bodyOption = document.createElement('option');
        bodyOption.value = bodyOption.innerHTML = body.tagName;
        selectElement.appendChild(bodyOption);
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
        const selectedIndex = selectElement.selectedIndex;
        const selectChange = document.getElementById('select-change');
        const selectChangeIndex = selectChange.selectedIndex;
        switch (selectChangeIndex) {
            case 0:
                if (selectedIndex > 0) {
                    children[selectedIndex-1].style.color = "blue";
                }else{
                    body.style.color = "blue";
                }
                break;
            case 1:
                if (selectedIndex > 0) {
                    children[selectedIndex-1].style.backgroundColor = "red";
                }else{
                    body.style.backgroundColor = "red";
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