// common functions for all the units
function calscore() {
    console.log("answerSubmitted");
    // change whatever you need here
}

function onSubmitGoodJob() {
    $('.answerImages').addClass("goodJob");
    $(".goodjobAt").css("display", "block");
    $(".interactive").addClass("rightlyDone");
    $(".interactive").removeClass("tryMore");
    play("data/assets/audio/good-job.mp3");
}

function onSubmitTryMore() {
    $('.answerImages').addClass("tryAgain");
    $(".tryAgainAt").css("display", "block");
    $(".interactive").addClass("tryMore");
    $(".interactive").removeClass("rightlyDone");
    play("data/assets/audio/oops-try-again.mp3");
}

function showAnswerDiv() {
    $(".rightAnswerTryAgain").css("display", "flex");
    $(".interactive").addClass("active");
    calscore();
}

$(document).on("click", ".closeAnswer", function() {
    $('.answerImages').removeClass("goodJob, tryAgain");
    $(".rightAnswerTryAgain").hide();
    $(".answerImages img").hide();
});

function reset() {
    $(".interactive").removeClass("active");
    $(".interactive").removeClass("rightlyDone tryMore active");
}



// show Width turn to landscape message

$(window).on('load resize', function() {
    var windowWidth = $(window).width();
    if (windowWidth < 480) {
        $('.turnScreenMsg').css("display", "flex");
    }
});
$(document).on('click', '.showTurnScreenMsg + #footerwithlesson .nextbtn', function() {
    var windowWidth = $(window).width();
    if (windowWidth < 480) {
        $('.turnScreenMsg').css("display", "flex");
    }
});
// close the turn screen msg
$(document).on('click', '.closeTrunMsg', function() {
    $('.turnScreenMsg').hide();
});



// lesosn 1

var isFlowersCorrect = false;

var isSquaCorrect = false;
var isTriCorrect = false;

isl4CircleCorrect = false;
$(document).ready(function() {

    var isDragging = false;


    $(document).on("mousedown", ".u4Lesson1", function() {
            isDragging = false;
        })
        .mousemove(function() {
            isDragging = true;
        })
        .mouseup(function() {
            var wasDragging = isDragging;
            console.log(wasDragging);
            isDragging = false;
            if (wasDragging) {
                // functionlity for 1st image un U3 L3
                jQuery('.dropArea').droppable({
                    accept: '.dropArea img',
                    drop: function(event, ui) {
                        ui.helper.data('dropped', true);
                        // awesome code that works and handles successful drops...
                        var $this = $(this);
                        ui.draggable.position({
                            my: "center",
                            at: "center",
                            of: $this,
                            using: function(pos) {
                                $(this).animate(pos, 200, "linear");
                            }
                        });
                    }
                });
                jQuery('.dropArea img').draggable({
                    revert: false,
                    containment: $('.flowerDrop'),
                    start: function(event, ui) {
                        ui.helper.data('dropped', false);
                    },
                    stop: function(event, ui) {
                        if (ui.helper.data('dropped')) {
                            isFlowersCorrect = true;
                            $(".dropArea").addClass('correctAnswer');
                        } else {
                            isFlowersCorrect = false;
                            $(".dropArea").removeClass('correctAnswer active');
                            $(".interactive").removeClass("rightlyDone");
                        }
                    }
                });



                jQuery('.drags .rightColors .lower.option').droppable({
                    accept: '.dragShapeHolder img.squaDrag',
                    drop: function(event, ui) {
                        ui.helper.data('dropped', true);
                        // awesome code that works and handles successful drops...
                        var $this = $(this);
                         ui.draggable.css({
                            position: "static",
                            top: "auto",
                            left: "auto",
                            marginRight: "6px"
                        }).appendTo( this );
                    }
                });
                jQuery('.dragShapeHolder img.squaDrag').draggable({
                    revert: false,
                    containment: $('.drags'),
                    start: function(event, ui) {
                        ui.helper.data('dropped', false);
                    },
                    stop: function(event, ui) {
                        if (ui.helper.data('dropped')) {
                            isSquaCorrect = true;
                            // $(".drags .rightColors .lower.option").addClass('correctAnswer');
                        } else {
                            isSquaCorrect = false;
                            // $(".drags .rightColors .lower.option").removeClass('correctAnswer active');
                            // $(".interactive").removeClass("rightlyDone");
                        }
                    }
                });

                jQuery('.drags .leftColors .lower.option').droppable({
                    accept: '.dragShapeHolder img.triDrag',
                    drop: function(event, ui) {
                        ui.helper.data('dropped', true);
                        // awesome code that works and handles successful drops...
                        var $this = $(this);
                         ui.draggable.css({
                            position: "static",
                            top: "auto",
                            left: "auto",
                            marginRight: "6px"
                        }).appendTo( this );
                    }
                });
                jQuery('.dragShapeHolder img.triDrag').draggable({
                    revert: false,
                    containment: $('.drags'),
                    start: function(event, ui) {
                        ui.helper.data('dropped', false);
                    },
                    stop: function(event, ui) {
                        if (ui.helper.data('dropped')) {
                            isTriCorrect = true; 
                        } else {
                            isTriCorrect = false;
                        }
                    }
                });





                jQuery('.Drob7Circles').droppable({
                    accept: '.wrapCircle span',
                    drop: function(event, ui) {
                        ui.helper.data('dropped', true);
                        // awesome code that works and handles successful drops...
                        var $this = $(this);
                         ui.draggable.css({
                            position: "static",
                            top: "auto",
                            left: "auto",
                            marginRight: "6px"
                        }).appendTo( this );
                    }
                });
                jQuery('.wrapCircle span').draggable({
                    revert: false,
                    containment: $('.drags'),
                    start: function(event, ui) {
                        ui.helper.data('dropped', false);
                    },
                    stop: function(event, ui) {
                        if (ui.helper.data('dropped')) {
                            isTriCorrect = true; 
                        } else {
                            isTriCorrect = false;
                        }
                    }
                });


                // lesson 4

                jQuery('.dropDD').droppable({
                    accept: '.ppDD span',
                    drop: function(event, ui) {
                        ui.helper.data('dropped', true);
                        // awesome code that works and handles successful drops...
                        var $this = $(this);
                         ui.draggable.css({
                            position: "static",
                            top: "auto",
                            left: "auto",
                            marginRight: "6px"
                        }).appendTo( this );
                    }
                });
                jQuery('.ppDD span').draggable({
                    revert: false,
                    containment: $('.drags'),
                    start: function(event, ui) {
                        ui.helper.data('dropped', false);
                    },
                    stop: function(event, ui) {
                        if (ui.helper.data('dropped')) {
                            isl4CircleCorrect = true; 
                        } else {
                            isl4CircleCorrect = false;
                        }
                    }
                });
            }
        });
});
$(document).on('click', '.u4Lesson1 + #footerwithlesson .nextbtn', function() {
    $(".dropArea img").attr({ "left": $(".dropArea img").position().left, "top": $(".dropArea img").position().top });
});

function resetLesson1Elem() {
    $(".dropArea img").animate({
        "left": $(".dropArea img").attr("left"),
        "top": $(".dropArea img").attr("top")
    });
}

$(document).on("click", "#u4L1 .submitAnswer", function() {
    showAnswerDiv();
    var inputValue = $("#six").val();
    if (inputValue == 6) {
        $('.six').addClass('correctAnswer');
    } else {
        $('.six').removeClass('correctAnswer');
    }
    if (isFlowersCorrect && inputValue == 6) {
        onSubmitGoodJob();
    } else {
        onSubmitTryMore();
    }
});

$(document).on("click", "#u4L1 .resetAnswer", function() {
    reset();
    $('.six input').val('');
    resetLesson1Elem();
});
var fillColor = "";
$(document).on("click", ".circleColor", function() {
    $('.circleColor').removeClass('active');
    $(this).addClass('active');
    fillColor = $(this).attr('fill-color');
});

$(document).on("click", ".colors .option img", function() {
    $(this).attr('filled', fillColor);
    $(this).siblings().attr('filled', fillColor);
});




$(document).on("click", "#u4L2 .submitAnswer", function() {
    showAnswerDiv();
    
    var i;
    ffsCount = [];
    $.each($('.colors .option img'), function(i, attrib) {
        var shouldFilled = $(this).attr('shouldFilled');
        var filledFilter = $(this).attr('filled');

        if (shouldFilled == filledFilter) {
            // console.log("true");
            $(this).closest('.option').addClass("correctAnswer");
            ffsCount.push(i);
            ++i;
        } else {
            $(this).closest('.option').removeClass("correctAnswer").addClass('wrongAnswer');
        }
    });

    var correctColors = $('.colors .option.correctAnswer').length;


    var totalTriDragged = $('.drags .leftColors .option .triDrag').length;
    var totalSquaDragged = $('.drags .rightColors .option .squaDrag').length;
    var isTriCorrectAfterDrag = false;
    var isSquaCorrectAfterDrag = false;
    if(totalTriDragged >= 3 && isTriCorrect){
        isTriCorrectAfterDrag = true;
        $('.drags .leftColors .option').addClass('correctAnswer');
    }else {
        $('.drags .leftColors .option').removeClass('correctAnswer');
    }
    if(totalSquaDragged <= 3 && totalSquaDragged >= 1 && isSquaCorrect){
        isSquaCorrectAfterDrag = true;
        $('.drags .rightColors .option').addClass('correctAnswer');
    }else {
        $('.drags .rightColors .option').removeClass('correctAnswer');
    }
    if (correctColors == 4 && isSquaCorrectAfterDrag && isTriCorrectAfterDrag) {
        onSubmitGoodJob();
    } else {
        onSubmitTryMore();
    }
});

$(document).on("click", "#u4L2 .resetAnswer", function() {
    reset();
    $('img').attr('filled', "");
    $('.drags .option img').remove();
    $('.dragShapeHolder div img').remove();
    $('.dragShapeHolder div:first-child').append(`<img src="data/assets/images/squa.jpg" alt="" class="squaDrag ui-draggable ui-draggable-handle" style="position: relative;" filled=""><img src="data/assets/images/squa.jpg" alt="" class="squaDrag ui-draggable ui-draggable-handle" style="position: relative;" filled=""><img src="data/assets/images/squa.jpg" alt="" class="squaDrag ui-draggable ui-draggable-handle" style="position: relative;" filled=""><img src="data/assets/images/squa.jpg" alt="" class="squaDrag ui-draggable ui-draggable-handle" style="position: relative;" filled="">`);
    $('.dragShapeHolder div:last-child').append(`<img src="data/assets/images/tri.jpg" alt="" class="triDrag ui-draggable ui-draggable-handle" style="position: relative;"><img src="data/assets/images/tri.jpg" alt="" class="triDrag ui-draggable ui-draggable-handle" style="position: relative;"><img src="data/assets/images/tri.jpg" alt="" class="triDrag ui-draggable ui-draggable-handle" style="position: relative;"><img src="data/assets/images/tri.jpg" alt="" class="triDrag ui-draggable ui-draggable-handle" style="position: relative;">`);
});


$(document).on("click", "#u4L3 .submitAnswer", function() {
    showAnswerDiv();
    var inputValue7 = $('.seven input').val();
    var totoalItemDragged = $('.Drob7Circles span').length;
    if(inputValue7 == 7){
        $('.seven').addClass('correctAnswer');
    }else {
        $('.seven').removeClass('correctAnswer');
    }
    if(totoalItemDragged == 7){
        $('.Drob7Circles').addClass('correctAnswer');
    }else {
        $('.Drob7Circles').removeClass('correctAnswer');
    }
    if(inputValue7 == 7 && totoalItemDragged == 7){
        onSubmitGoodJob();
    } else {
        onSubmitTryMore();
    }
});

$(document).on("click", "#u4L3 .resetAnswer", function() {
    reset();
    $('.seven input').val('');
    $('.Drob7Circles span').remove();
    $('.wrapCircle span').remove();
    $('.wrapCircle').append(`<span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circle7 ui-draggable ui-draggable-handle" style="position: relative;"></span>`);    
});



// lesson 4

$(document).on("click", ".leftAct .option > div", function() {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    var isRightAnswer = $(this).hasClass('rightAns');
    if(isRightAnswer){
        $(this).closest('.option').addClass('correctAnswer');
    }else {
        $(this).closest('.option').removeClass('correctAnswer');
    }
});

$(document).on("click", "#u4L4 .submitAnswer", function() {
    showAnswerDiv();
    var correctAnswerInCrossL4 = $('.leftAct .option.correctAnswer').length;
    var totalCircleDroppedL4 = $('.dropDD span').length;
    var input1Val = $('#l41').val();
    var input2Val = $('#l42').val();
    if(isl4CircleCorrect){
        $('.dropDD').addClass('correctAnswer');
    }else {
        $('.dropDD').removeClass('correctAnswer');
    }
    if(input1Val == 4){
        $('.inputsL4 .leftInput .option').addClass('correctAnswer');
    }else {
        $('.inputsL4 .leftInput .option').removeClass('correctAnswer');
    }
    if(input2Val == 2){
        $('.inputsL4 .rightInput .option').addClass('correctAnswer');
    }else {
        $('.inputsL4 .rightInput .option').removeClass('correctAnswer');
    }
    if(correctAnswerInCrossL4 == 2 && totalCircleDroppedL4 == 3 && input1Val == 4 && input2Val == 2){
        onSubmitGoodJob();
    } else {
        onSubmitTryMore();
    }
});

$(document).on("click", "#u4L4 .resetAnswer", function() {
    reset();
    $('.inputsL4 input').val('');
    $('.dropDD span').remove();
    $('.ppDD span').remove();
    $('.rightAns').removeClass('selected');
    $('.ppDD').append(`<span class="circleL4 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circleL4 ui-draggable ui-draggable-handle" style="position: relative;"></span><span class="circleL4 ui-draggable ui-draggable-handle" style="position: relative;"></span>`);
});


// lesson 5
$(document).on("click", ".numWrapper .option .numb", function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('rightA')){
        $(this).closest('.option').addClass('correctAnswer');
    }else {
        $(this).closest('.option').removeClass('correctAnswer');
    }
});

$(document).on("click", "#u4L5 .submitAnswer", function() {
    showAnswerDiv();
    var selectedAnswer = $('.numWrapper .option .numb.active').length;
    var selectedRightAnswer = $('.numWrapper .option .numb.active.rightA').length;
    if(selectedAnswer == selectedRightAnswer){
        onSubmitGoodJob();
    } else {
        onSubmitTryMore();
    }
});

$(document).on("click", "#u4L5 .resetAnswer", function() {
    reset();
    $('.numWrapper .option .numb').removeClass('active');
});


// lesson 6

$(document).on("click", ".opt h5", function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if($(this).hasClass('rightA')){
        $(this).closest('.option').addClass('correctAnswer');
    }else {
        $(this).closest('.option').removeClass('correctAnswer');
    }
});


$(document).on("click", "#u4L6 .submitAnswer", function() {
    showAnswerDiv();
    var selectedAnswer = $('.opt h5.active').length;
    var selectedRightAnswer = $('.opt h5.active.rightA').length;
    if(selectedAnswer == selectedRightAnswer){
        onSubmitGoodJob();
    } else {
        onSubmitTryMore();
    }
});

$(document).on("click", "#u4L6 .resetAnswer", function() {
    reset();
    $('.opt h5').removeClass('active');
});