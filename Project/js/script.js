$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=Txu7JGdMoSgOHZuZqXfX3VDlpUUoaA4I8i49a7nB",
    method: "GET",
    success: function(response) {
        console.log(response)
        document.getElementById("nasa-title").textContent = response.title
        document.getElementById("nasa-img").src = response.url
        document.getElementById("nasa-description").textContent = response.explanation
    }
});

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;