$(document).ready(function(){
    var headclick = 0;
    var eyesclick = 0;
    var noseclick = 0;
    var mouthclick = 0;
	$("#head").click(function() {
        if(headclick < 9) {
            headclick++;
            $("#head").animate({left: "-=367px"}, 500);
        } else {
            headclick = 0;
            $("#head").animate({left: "0px"}, 500);
        }
    });

    $("#eyes").click(function() {
        if(eyesclick < 9) {
            eyesclick++;
            $("#eyes").animate({left: "-=367px"}, 500);
        } else {
            eyesclick = 0;
            $("#eyes").animate({left: "0px"}, 500);
        }
    });

    $("#nose").click(function() {
        if(noseclick < 9) {
            noseclick++;
            $("#nose").animate({left: "-=367px"}, 500);
        } else {
            noseclick = 0;
            $("#nose").animate({left: "0px"}, 500);
        }
    });

    $("#mouth").click(function() {
        if(mouthclick < 9) {
            mouthclick++;
            $("#mouth").animate({left: "-=367px"}, 500);
        } else {
            mouthclick = 0;
            $("#mouth").animate({left: "0px"}, 500);
        }
    });

    lightning_one(4000);
    lightning_two(5000);
    lightning_three(7000);

    function lightning_one(t) {
        $("#lightning1").fadeIn(250).fadeOut(250);
        setTimeout(function() {
            lightning_one(t);
        }, t);
    }

    function lightning_two(t) {
        $("#lightning2").fadeIn(250).fadeOut(250);
        setTimeout(function() {
            lightning_two(t);
        }, t);
    }

    function lightning_three(t) {
        $("#lightning3").fadeIn(250).fadeOut(250);
        setTimeout(function() {
            lightning_three(t);
        }, t);
    }
    

});//end doc.onready function

