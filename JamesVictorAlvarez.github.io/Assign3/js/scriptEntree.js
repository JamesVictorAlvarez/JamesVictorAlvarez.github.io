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

        //Entree
        console.log(data.EntreeItem.Question)
        document.getElementById("entreeH1").innerHTML = data.EntreeItem.Question
        document.getElementById("entreeName1").innerHTML = data.EntreeItem.Choice[0].Name
        document.getElementById("entreeName2").innerHTML = data.EntreeItem.Choice[1].Name
        document.getElementById("entreeName3").innerHTML = data.EntreeItem.Choice[2].Name
        document.getElementById("entreeName4").innerHTML = data.EntreeItem.Choice[3].Name
     });
})
