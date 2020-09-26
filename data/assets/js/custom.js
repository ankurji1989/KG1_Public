// Get the complete URL of current page
var baseURL = window.location.href;

// Content Loader
var loader;
function lodaderOnLoad() {
    $("#loaderwrap").show();
    loader = setTimeout(showPage, 1000);
}
function showPage() {
  $("#loaderwrap").fadeOut();
  $(".loadpagecontent").fadeIn();
}

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

// Disable Right Click Menu
$(function () {
    $("body").bind("contextmenu", function(e){
        e.preventDefault(); // Stop right click on link
        return false;
    });

    var control = false;
    $(document).on("keyup keydown", function(e) {
        control = e.ctrlKey;
    });

    $("body").on("click", function(e) {
        if (control) {
        return false; // Stop ctrl + click on link
        }
    });
});

// Load common header and footer
function lessonHeaderfooter(pagename, lessonDynName) {
    $(function () {
        if(pagename == 'data/unit1/toc.html' || pagename == 'data/unit2/toc.html' || pagename == 'data/unit3/toc.html' || pagename == 'data/unit4/toc.html' || pagename == 'data/unit5/toc.html' || pagename == 'data/unit6/toc.html' || pagename == 'data/unit7/toc.html' || pagename == 'data/unit8/toc.html') {
            $("#header").load("data/include/header-unit-toc.html", function(){
                // Full Screen window
                fullScreenWindow();
                $(".dynamiclessontitle").text(lessonDynName);    
            });
        } else {
            $("#header").load("data/include/header.html", function(){
                // Full Screen window
                fullScreenWindow();
                $(".dynamiclessontitle").text(lessonDynName);
                dynamicURL(pagename);
            });
        }
        if(pagename == 'data/unit1/lesson-1.html' || pagename == 'data/unit1/lesson-2.html' || pagename == 'data/unit1/lesson-3.html' || pagename == 'data/unit1/lesson-4.html' || pagename == 'data/unit1/lesson-5.html' || pagename == 'data/unit1/lesson-6.html' || pagename == 'data/unit1/lesson-7.html') {
            $("#footerwithlesson").load("data/unit1/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        } else if(pagename == 'data/unit2/lesson-1.html' || pagename == 'data/unit2/lesson-2.html' || pagename == 'data/unit2/lesson-3.html' || pagename == 'data/unit2/lesson-4.html' || pagename == 'data/unit2/lesson-5.html' || pagename == 'data/unit2/lesson-6.html' || pagename == 'data/unit2/lesson-7.html') {
            $("#footerwithlesson").load("data/unit2/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        } else if(pagename == 'data/unit3/lesson-1.html' || pagename == 'data/unit3/lesson-2.html' || pagename == 'data/unit3/lesson-3.html' || pagename == 'data/unit3/lesson-4.html' || pagename == 'data/unit3/lesson-5.html' || pagename == 'data/unit3/lesson-6.html' || pagename == 'data/unit3/lesson-7.html') {
            $("#footerwithlesson").load("data/unit3/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        } else if(pagename == 'data/unit4/lesson-1.html' || pagename == 'data/unit4/lesson-2.html' || pagename == 'data/unit4/lesson-3.html' || pagename == 'data/unit4/lesson-4.html' || pagename == 'data/unit4/lesson-5.html' || pagename == 'data/unit4/lesson-6.html' || pagename == 'data/unit4/lesson-7.html') {
            $("#footerwithlesson").load("data/unit4/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        }
        else if(pagename == 'data/unit5/lesson-1.html' || pagename == 'data/unit5/lesson-2.html' || pagename == 'data/unit5/lesson-3.html' || pagename == 'data/unit5/lesson-4.html' || pagename == 'data/unit5/lesson-5.html' || pagename == 'data/unit5/lesson-6.html' || pagename == 'data/unit5/lesson-7.html') {
            $("#footerwithlesson").load("data/unit5/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        } else if(pagename == 'data/unit6/lesson-1.html' || pagename == 'data/unit6/lesson-2.html' || pagename == 'data/unit6/lesson-3.html' || pagename == 'data/unit6/lesson-4.html' || pagename == 'data/unit6/lesson-5.html' || pagename == 'data/unit6/lesson-6.html' || pagename == 'data/unit6/lesson-7.html') {
            $("#footerwithlesson").load("data/unit6/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        } else if(pagename == 'data/unit7/lesson-1.html' || pagename == 'data/unit7/lesson-2.html' || pagename == 'data/unit7/lesson-3.html' || pagename == 'data/unit7/lesson-4.html' || pagename == 'data/unit7/lesson-5.html' || pagename == 'data/unit7/lesson-6.html' || pagename == 'data/unit7/lesson-7.html') {
            $("#footerwithlesson").load("data/unit7/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        } else if(pagename == 'data/unit8/lesson-1.html' || pagename == 'data/unit8/lesson-2.html' || pagename == 'data/unit8/lesson-3.html' || pagename == 'data/unit8/lesson-4.html' || pagename == 'data/unit8/lesson-5.html' || pagename == 'data/unit8/lesson-6.html' || pagename == 'data/unit8/lesson-7.html') {
            $("#footerwithlesson").load("data/unit8/footerwithlesson.html", function(){
                // Full Screen window
                nextnprev ();
                lessonActiveMenu(lessonDynName);  
            });
        } else {
            $("#footerwithlesson").load("", function(){
                // Full Screen window
                nextnprev ();
            });
        }
    });
}

function dynamicURL(pagenamedynamic) {
    //alert("Hi");
    if (pagenamedynamic == 'data/unit8/lesson-1.html' || pagenamedynamic == 'data/unit8/lesson-2.html' || pagenamedynamic == 'data/unit8/lesson-3.html' || pagenamedynamic == 'data/unit8/lesson-4.html' || pagenamedynamic == 'data/unit8/lesson-5.html' || pagenamedynamic == 'data/unit8/lesson-6.html' || pagenamedynamic == 'data/unit8/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit8/toc.html');
    } else if (pagenamedynamic == 'data/unit7/lesson-1.html' || pagenamedynamic == 'data/unit7/lesson-2.html' || pagenamedynamic == 'data/unit7/lesson-3.html' || pagenamedynamic == 'data/unit7/lesson-4.html' || pagenamedynamic == 'data/unit7/lesson-5.html' || pagenamedynamic == 'data/unit7/lesson-6.html' || pagenamedynamic == 'data/unit7/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit7/toc.html');
    } else if (pagenamedynamic == 'data/unit6/lesson-1.html' || pagenamedynamic == 'data/unit6/lesson-2.html' || pagenamedynamic == 'data/unit6/lesson-3.html' || pagenamedynamic == 'data/unit6/lesson-4.html' || pagenamedynamic == 'data/unit6/lesson-5.html' || pagenamedynamic == 'data/unit6/lesson-6.html' || pagenamedynamic == 'data/unit6/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit6/toc.html');
    } else if (pagenamedynamic == 'data/unit5/lesson-1.html' || pagenamedynamic == 'data/unit5/lesson-2.html' || pagenamedynamic == 'data/unit5/lesson-3.html' || pagenamedynamic == 'data/unit5/lesson-4.html' || pagenamedynamic == 'data/unit5/lesson-5.html' || pagenamedynamic == 'data/unit5/lesson-6.html' || pagenamedynamic == 'data/unit5/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit5/toc.html');
    } else if (pagenamedynamic == 'data/unit4/lesson-1.html' || pagenamedynamic == 'data/unit4/lesson-2.html' || pagenamedynamic == 'data/unit4/lesson-3.html' || pagenamedynamic == 'data/unit4/lesson-4.html' || pagenamedynamic == 'data/unit4/lesson-5.html' || pagenamedynamic == 'data/unit4/lesson-6.html' || pagenamedynamic == 'data/unit4/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit4/toc.html');
    } else if (pagenamedynamic == 'data/unit3/lesson-1.html' || pagenamedynamic == 'data/unit3/lesson-2.html' || pagenamedynamic == 'data/unit3/lesson-3.html' || pagenamedynamic == 'data/unit3/lesson-4.html' || pagenamedynamic == 'data/unit3/lesson-5.html' || pagenamedynamic == 'data/unit3/lesson-6.html' || pagenamedynamic == 'data/unit3/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit3/toc.html');
    } else if (pagenamedynamic == 'data/unit2/lesson-1.html' || pagenamedynamic == 'data/unit2/lesson-2.html' || pagenamedynamic == 'data/unit2/lesson-3.html' || pagenamedynamic == 'data/unit2/lesson-4.html' || pagenamedynamic == 'data/unit2/lesson-5.html' || pagenamedynamic == 'data/unit2/lesson-6.html' || pagenamedynamic == 'data/unit2/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit2/toc.html');
    } else if (pagenamedynamic == 'data/unit1/lesson-1.html' || pagenamedynamic == 'data/unit1/lesson-2.html' || pagenamedynamic == 'data/unit1/lesson-3.html' || pagenamedynamic == 'data/unit1/lesson-4.html' || pagenamedynamic == 'data/unit1/lesson-5.html' || pagenamedynamic == 'data/unit1/lesson-6.html' || pagenamedynamic == 'data/unit1/lesson-7.html') {
        //alert(pagenamedynamic);
        $(".dynamichomeurl").attr('href', 'data/unit1/toc.html');
    } else {
        $(".dynamichomeurl").attr('href', 'data/include/header-unit-toc.html');
    }

    if (pagenamedynamic == 'data/unit1/toc.html' || pagenamedynamic == 'data/unit2/toc.html' || pagenamedynamic == 'data/unit3/toc.html' || pagenamedynamic == 'data/unit4/toc.html' || pagenamedynamic == 'data/unit5/toc.html' || pagenamedynamic == 'data/unit6/toc.html' || pagenamedynamic == 'data/unit7/toc.html' || pagenamedynamic == 'data/unit8/toc.html') {
        //alert("Header will call");
        $("#header").load("data/include/header-unit-toc.html");
    }
}

function callDynamicScript() {
    lodaderOnLoad();
    $('.dynamicpagediv').on('click','.switchpage', function(e) {
        e.preventDefault();
        var page = $(this).attr('href');
        $("#loadpagecontent").load(page, function(){
            dynamicURL(page);
            tocUnitLessonShowHide();
        });
        return false;
    });
}

function callDynamicScriptHF() {
    lodaderOnLoad();
    $('.dynamicpagediv').on('click','.switchpage', function(e) {
        e.preventDefault();
        var page = $(this).attr('href'); 
        var dataTitle = $(this).attr('data-title');
        $("#loadpagecontent").load(page, function() {
            lessonHeaderfooter(page, dataTitle);
            rightAndWrongSelection();
        });
        return false;
    });
}

function tocUnitLessonShowHide() {
    if($(".tochideshow").hasClass("open")){
        $(".tochideshow").removeClass("open");
        $(".tocunitsingle").fadeIn("slow");
        $(".tochideshow").html('<i class="fa fa-arrow-down" aria-hidden="true"></i>');
    } else {
        $(".tochideshow").addClass("open");
        $(".tocunitsingle").fadeOut("slow");
        $(".tochideshow").html('<i class="fa fa-arrow-up" aria-hidden="true"></i>');
    }
    return false;
}

function hammenu(e) {
    e.preventDefault();
    $("#hamburgermenu").fadeIn();
    $(".hamburgerclose").click(function(){
        $("#hamburgermenu").fadeOut();
    });
}

function lessonActiveMenu(lessonDynNameFooter) {
    $(".dynamiclessontitle").text(lessonDynNameFooter);
}

/*$("a.switchpage").mouseover(function(e) {
    alert("Hi");
    var elem    = document.getElementById("loadpagecontent"),
        script  = document.createElement('script');
    script.innerHTML = 
        '$("a.switchpage").click(function() {' +
            'alert("clicked outside");' +
            'var page =$(this).attr("href");' +
            '$("#loadpagecontent").load(page);' +
            'return false;' +
        '});';
    elem.appendChild(script);
});*/

// global variable to get the audio tag ID
//var x = document.getElementById("audio");

// Pause audio
function pauseAudio() {
    var x = document.getElementById("audio");
    x.pause();
}

// Play audio
function play(sound) {
    var audio = document.getElementById("audio");
    audio.pause();
    audio.setAttribute('src', sound);
    audio.play();
};

// Common script
function preventLink(e) {
    // disable anchor href link
    e.preventDefault();
}

$(".disablehreflink").click(function (e) {
    e.preventDefault();
});

/*function stopAudio(){
   var audio = document.getElementById("audio");
   audio.pause();
}*/

/*$(".wrong, .right").on("click", function (e) {
    var checkbox = $(this);
    if (!checkbox.is(":checked")) {
        // do the confirmation thing here
        e.preventDefault();
        return false;
    }
});*/

// Right and wrong questions - only for 4 questions
function rightAndWrongSelection() {
    $('#quizForm').on('click', 'input[type=radio]', function(){
        var $radioInputCount = $("#quizForm input[type=radio]:checked").length;
        if($radioInputCount === 4) {
            $("#answer").fadeIn().css("display","inline-block");
            $("#answer img").css({"opacity":"1", "transform":"scale(1)"});
        } else {
            $("#answer").fadeOut().css("display","none");
            $("#answer img").css({"opacity":"0", "transform":"scale(0.4)"});
        }
    });

    $(".resetRadioInput").click(function(){
        $(".ansaftersubmit").hide();
        $("#answer img").css({"opacity":"0", "transform":"scale(0.4)"});
        $("#answer").fadeOut().css("display","none");
    });

    $("#answer").click(function (e) {
        e.preventDefault();
        //var $classLength = $('.correctans');
        //alert ($classLength.length);
        var $radioChecked = $("#quizForm input[type=radio]:checked").length;
        var $correctAns = $("#quizForm .correctans:checked").length;
        if ($radioChecked === 4) {
            if ($correctAns === 4 && $(".correctans").is(":checked")) {
                $(".result .goodjob, .transparentbg").css("display", "inline-block");
                play("data/assets/audio/good-job.mp3");
                //$('.transparentbg').delay(2000).css("display","none");
                $(".ansaftersubmit").hide();
                $(".correctaftersubmit").show();
                
            } else {
                $(".result .tryagain, .transparentbg").css("display", "inline-block");
                play("data/assets/audio/oops-try-again.mp3");
                $(".ansaftersubmit").show();
            }
        } else {
            $(".result .tryagain, .transparentbg").css("display", "inline-block");
            play("data/assets/audio/oops-try-again.mp3");
        }

        $(document).mouseup(function (e) {
            var container = $(".tryagain");
            if (!container.is(e.target) &&
                container.has(e.target).length === 0) {
                $(".transparentbg, .result .tryagain").hide();
                pauseAudio();
            }
            var container = $(".goodjob");
            if (!container.is(e.target) &&
                container.has(e.target).length === 0) {
                $(".transparentbg, .result .goodjob").hide();
                pauseAudio();
            }
        });
    });
}

function fullScreenWindow() {
    $('#fullscreen .requestfullscreen, #fullscreen .exitfullscreen').on('click', function(e){
        e.preventDefault();
        // if already full screen; exit
        // else go fullscreen
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
            document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            }

            $('.wrapper').removeClass('fullscreen');
            $('#fullscreen .requestfullscreen').show();
            $('#fullscreen .exitfullscreen').hide();
        } else {
            element = $('#fullscreen').get(0);
            if (element.requestFullscreen) {
            element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
            }

            $('#fullscreen .requestfullscreen').hide();
            $('#fullscreen .exitfullscreen').show();
            $('.wrapper').addClass('fullscreen');
        }
    });
}

// Full Screen window function - TOC Page
function fullScreenWindowtoc(e) {
        e.preventDefault();
        // if already full screen; exit
        // else go fullscreen
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
            document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
            }

            $('.wrapper').removeClass('fullscreen');
            $('#fullscreen .requestfullscreen').show();
            $('#fullscreen .exitfullscreen').hide();
        } else {
            element = $('#fullscreen').get(0);
            if (element.requestFullscreen) {
            element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
            }

            $('#fullscreen .requestfullscreen').hide();
            $('#fullscreen .exitfullscreen').show();
            $('.wrapper').addClass('fullscreen');
        }
}

// Load div using next and previous button
function nextnprev () {
    var divs = $(".lesson>.exercise");
    var now = 0; // currently shown div
    divs.hide().first().show();
    $(".nextprevbtn .prevbtn a").css({"opacity":"0.7", "cursor":"default"});
    $(".nextprevbtn .actionbtn.prevbtn a:hover").css("transform", "scale(1)");

    $(".nextprevbtn .nextbtn").click(function (e) {
        $(".nextprevbtn .prevbtn a").css({"opacity":"1", "cursor":"pointer"});
        e.preventDefault();
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : divs.length-1;
        divs.eq(now).show(); // show next
        if(now == (divs.length-1)) {
            $(".nextprevbtn .nextbtn a").css({"opacity":"0.7", "cursor":"default"});
            $(".actionbtn.nextbtn a:hover").css("transform", "scale(1)");
        }
    });

    $(".nextprevbtn .prevbtn").click(function (e) {
        e.preventDefault();
        $(".nextprevbtn .nextbtn a").css({"opacity":"1", "cursor":"pointer"});
        divs.eq(now).hide();
        //now = (now > 0) ? now - 1 : divs.length - 1;
        now = (now > 0) ? now - 1 : divs.length * 0;
        divs.eq(now).show(); // or .css('display','block');
        //console.log(divs.length, now);
        if(now == 0) {
            $(".nextprevbtn .prevbtn a").css({"opacity":"0.7", "cursor":"default"});
            $(".actionbtn.prevbtn a:hover").css("transform", "scale(1)");
        }
    });
}

// Show homework
function homeworkdetail() {
    $('.homeworktext').fadeIn();
    $('.homeworktext span').click(function() {
        $(".homeworktext").fadeOut();
    });
    setTimeout(function(){
        $('.homeworktext').fadeOut();// or fade, css display however you'd like.
     }, 5000);
}
