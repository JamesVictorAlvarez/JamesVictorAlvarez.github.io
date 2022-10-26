$(document).ready(function() {
    //Toggling sidebar
    let menuToggle = document.querySelector(".toggle");
    let side = document.querySelector(".sidebar")
    menuToggle.onclick = function() {
        menuToggle.classList.toggle("active");
        side.classList.toggle("active");
    }

    //Switch the active cursor in the sidebar
    let list = $(".list");
    for( let i = 0; i < list.length; i++) {
        list[i].onclick = function() {
            let j = 0;
            while (j < list.length) {
                list[j++].className = "list";
            }
            list[i].className = "list active";
        }
    }
});