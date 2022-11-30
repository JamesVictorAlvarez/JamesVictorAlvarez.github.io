var images = $(".image1, .image2, .image3, .image4, .image5, .image6, .image7, .image8, .image9, .image10, .image11, .image12, .image13, .image14, .image15, .image16, .image17, .image18");

$.ajax({
    url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=Txu7JGdMoSgOHZuZqXfX3VDlpUUoaA4I8i49a7nB",
    method: "GET",
    success: function(response) {
        for (var i = 0; i < images.length; i++) {
            images[i].src = response.photos[i].img_src;
        }
        console.log(response)
    }
});