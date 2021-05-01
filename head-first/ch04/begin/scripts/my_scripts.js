
$(document).ready(function(){
    var v = false;
    var $f;
    var $m;
    $("button#vegOn").click(function() {
        if(v == false) {
            v = true;
            $f = $(".fish").parent().parent().detach();
            $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>")
            $(".meat").after("<li class='tofu'><em>Tofu</em></li>")
            $(".tofu").parent().parent().addClass("veg_leaf");
            $m = $(".meat").detach();
        }
    });
	
    $("button#restoreMe").click(function() {
        if(v == true) {
            v = false;
            $(".menu_entrees li").first().before($f);
            $(".portobello").replaceWith("<li class='hamburger'>hamburger</li>");
            $(".tofu").each(function(index) {
               $(this).replaceWith($m[index]); 
            });
            $(".veg_leaf").removeClass("veg_leaf")
        }
    });
});