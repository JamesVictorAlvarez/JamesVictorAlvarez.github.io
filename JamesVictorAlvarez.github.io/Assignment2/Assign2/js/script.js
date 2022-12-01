$(document).ready(function () {
    //Revove string in list1 and put in list2
    $(".button1").click(function () {
        $("#list1 option:selected").each(function () {
            $(this).remove().appendTo("#list2");
        });
    });

    //Revove string in list1 and put in list2
    $(".button2").click(function () {
        $("#list2 option:selected").each(function () {
            $(this).remove().appendTo("#list1");
        });
    });

    //Check if Zip Code is correct
    var reg = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$/;
    $("#validateButton").click(function () {
        if (reg.test($("#zip").val())) {
            $(".match").removeClass("hide");
            $(".match").addClass("show");
            $(".match").addClass("showAlert");
            setTimeout(function() {
                $(".match").addClass("hide");
                $(".match").removeClass("show");
            }, 4000);
        }
        else {
            $(".alert").removeClass("hide");
            $(".alert").addClass("show");
            $(".alert").addClass("showAlert");
            setTimeout(function() {
                $(".alert").addClass("hide");
                $(".alert").removeClass("show");
            }, 4000);
        }
    })

    $(".close-btn").click(function() {
        $(".alert").addClass("hide");
        $(".alert").removeClass("show");
    })

    $(".close-btn1").click(function() {
        $(".match").addClass("hide");
        $(".match").removeClass("show");
    })

    $(window).scroll(function() {
        var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
        scrollPercent = (scroll / (dh - wh)) * 100;
        $(".progress").css("width", scrollPercent + '%');
    })
});

