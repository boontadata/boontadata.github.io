//Gestion scroll pour article
if ($("#postToScroll").length && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('html, body').animate({
        scrollTop: $("#postToScroll").offset().top - $(".navbar-custom").height()
    });
}

//Gestion couleur de la nav-bar
$(document).ready(function(){

    //$("#boontadata_home_link").hide();

    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        //Check si pas en mode portable
        if ($("#myNavBar").is(":visible") == true && $("#myNavBar").attr("class") != "navbar-collapse collapse in") {
            if(scroll_pos > $(".intro-header").height() - $(".navbar-custom").height()) {
                $(".navbar-custom").css('background-color', '#4787DA');
                $("#boontadata_home_link").show();

            } else {
                $(".navbar-custom").css('background-color', '');
                $("#boontadata_home_link").hide();
            }
        }
    });




    $(window).resize(function() {
        if ($("#myNavBar").css("display") == "none" && $(".navbar-custom").css('background-color', '#3f79c4')) {
            $(".navbar-custom").css('background-color', '');
            $("#boontadata_home_link").show();
        }
    });
});

