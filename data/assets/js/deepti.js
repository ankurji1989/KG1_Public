$(function () {
    lodaderOnLoad();
    $("#loadpagecontent").load("data/splash-screen.html", function(){
        // Full Screen window function
        /*$(document).on('keyup',function(evt) {
            if (evt.keyCode == 27 || $('.wrapper').hasClass('fullscreen')) {
                //console.log(evt.keyCode);
                $('.wrapper').removeClass("fullscreen");
            }
        });*/        
    });
});
