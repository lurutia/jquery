
$(document).ready(function() {
    $('.guess_box').hover(
        function() {
            $(this).addClass("my_hover");
        },
        function() {
            $(this).removeClass("my_hover");
        }
    );

    $(".guess_box").click(checkForCode);
    

    var getRandom = function(num) {
        return Math.floor(Math.random()*num);
    }

    var hideCode = function() {
        var numRand = getRandom(4);
        $('.guess_box').each(function(index, value) {
            if(index == numRand) {
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }

    hideCode();

    function checkForCode() {
        var discount;
        if($.contains(this, document.getElementById("has_discount"))) {
            var my_num = getRandom(100);
            discount = "<p>Your Code : CODE "+ my_num + "</p>";
        } else {
            discount = "<p>Sorry, no discount this time!</p>";
        }
        $("#result").append(discount);

        $('.guess_box').each(function() {
            if($.contains(this, document.getElementById("has_discount"))) {
                $(this).addClass('discount');
            } else {
                $(this).addClass('no_discount');
            }

            $(this).unbind();
        });

        
    }
});