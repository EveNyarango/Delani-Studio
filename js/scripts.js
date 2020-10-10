$(document).ready(function () {
    $("#design").click(function () {
        $("#design").hide("slow");
        $("#par1").show("slow");
    });
    $("#par1").click(function () {
        $("#par1").hide("slow");
        $("#design").show("slow");
    });

    $("#dev").click(function () {
        $("#dev").hide("slow");
        $("#par2").show("slow");
    });
    $("#par2").click(function () {
        $("#par2").hide("slow");
        $("#dev").show("slow");
    });
    $("#product").click(function () {
        $("#product").hide("slow");
        $("#par3").show("slow");
    });
    $("#par3").click(function () {
        $("#par3").hide("slow");
        $("#product").show("slow");
    });
});
$(document).ready(function () {
    $("#one").mouseover(function () {
            $("#black1").show();
        })
        .mouseout(function () {
            $("#black1").hide();
        });
    $("#two").mouseover(function () {
            $("#black2").show();
        })
        .mouseout(function () {
            $("#black2").hide();
        });
    $("#three").mouseover(function () {
            $("#black3").show();
        })
        .mouseout(function () {
            $("#black3").hide();
        });
    $("#four").mouseover(function () {
            $("#black4").show();
        })
        .mouseout(function () {
            $("#black4").hide();
        });
    $("#five").mouseover(function () {
            $("#black5").show();
        })
        .mouseout(function () {
            $("#black5").hide();
        });
    $("#six").mouseover(function () {
            $("#black6").show();
        })
        .mouseout(function () {
            $("#black6").hide();
        });
    $("#seven").mouseover(function () {
            $("#black7").show();
        })
        .mouseout(function () {
            $("#black7").hide();
        });
    $("#eight").mouseover(function () {
            $("#black8").show();
        })
        .mouseout(function () {
            $("#black8").hide();
        });
});


function myResponse() {
    var name = document.getElementById("kerry");
    alert("Thank you" + name + "," + "for your response")
};