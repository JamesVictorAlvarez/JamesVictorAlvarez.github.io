/*--------------------------------Design--------------------------------------*/
$(document).ready(function () {
    //Toggling sidebar
    let menuToggle = document.querySelector(".toggle");
    let side = document.querySelector(".sidebar")
    menuToggle.onclick = function () {
        menuToggle.classList.toggle("active");
        side.classList.toggle("active");
    }

    //Switch the active cursor in the sidebar
    let list = $(".list");
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            let j = 0;
            while (j < list.length) {
                list[j++].className = "list";
            }
            list[i].className = "list active";
        }
    }
})
/*--------------------------------Design--------------------------------------*/


/*--------------------------------Assignment--------------------------------------*/
$(document).ready(function () {
    $.getJSON('survey.json', function(data) {
        //Menu
        document.getElementById("menuH1").innerHTML = data.MenuItem.Question
        document.getElementById("menuName1").innerHTML = data.MenuItem.Choice[0].Name
        document.getElementById("menuName2").innerHTML = data.MenuItem.Choice[1].Name
        document.getElementById("menuName3").innerHTML = data.MenuItem.Choice[2].Name
     });
})