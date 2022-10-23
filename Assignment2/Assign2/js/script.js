$(document).ready(function() {
    $(".button1").click(function() {
    $("#list1 option:selected").each(function() {
        $(this).remove().appendTo("#list2");
    });
});

$(".button2").click(function() {
    $("#list2 option:selected").each(function() {
        $(this).remove().appendTo("#list1");
    });
});

    var reg = /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$/;
    $("#validateButton").click(function() {
        if (reg.test($("#zip").val())) {
            alert("Match");
        }
        else {
            alert("Error");
        }
    })


});

