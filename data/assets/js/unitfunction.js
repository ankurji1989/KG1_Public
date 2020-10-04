var unitFn = {

    init: function() {
        unitFn.callEventsOnPageLoad();
    },

    callEventsOnPageLoad: function() {
        unitFn.unit_5_Fn();
        unitFn.unit_6_Fn();
        unitFn.unit_7_Fn();
        unitFn.unit_8_Fn();
    },

    unit_5_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();
        unitLesson_6_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
            }

            function exerciseFn_2() {
                const selector = $(".unit_5_lesson_1 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".balloonBox .box > div > div").click(function(){
                    $(this).toggleClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const totalBallon = $(selector).find(".balloonBox .box > div > div.selected").length;
                    const textbox = 1*$(selector).find(".textbox1").val();
                    isAnswerCorrected = totalBallon === 8 && textbox === 8 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".textbox1").val('');
                    $(selector).find(".balloonBox .box > div > div").removeClass('selected');
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();

            function exerciseFn_1() {
            }

            function exerciseFn_2() {
                const selector = $(".unit_5_lesson_2 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".topBox:first-child .selectionArea").click(function(){
                    $(selector).find(".topBox:first-child .selectionArea").removeClass('selected');
                    $(this).addClass('selected');
                });

                $(selector).find(".bottomBox .selectionArea").click(function(){
                    $(selector).find(".bottomBox .selectionArea").removeClass('selected');
                    $(this).addClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = $(selector).find(".topBox:first-child .selectionArea.area1").hasClass('selected') && $(selector).find(".bottomBox .selectionArea.area2").hasClass('selected') ? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".topBox .selectionArea").removeClass('selected');
                });
            }

            function exerciseFn_3() {
                const selector = $(".unit_5_lesson_2 .exercise3");
                let isAnswerCorrected = false;
                var line_start = '';
                var line_end = '';
                var totalSelectedLine_box1 = 0;
                var totalSelectedLine_box2 = 0;

                $(selector).find(".match_box .clickBox").click(function(){
                    if($(this).hasClass('leftMatch')) {
                        line_start = $(this).data('id');
                    } else {
                        line_end = $(this).data('id');
                    }
    
                    totalSelectedLine_box1 = $(selector).find(".match_box .line:visible").length;
                    $(selector).find(".match_box .line").each(function(){
                        if($(this).data('id') === line_start + '_' + line_end && totalSelectedLine_box1 < 2) {
                            $(this).show();
                            line_start = '';
                            line_end = '';
                        }
                    });

                });

                $(selector).find(".match_box2 .clickBox").click(function(){
                    if($(this).hasClass('leftMatch')) {
                        line_start = $(this).data('id');
                    } else {
                        line_end = $(this).data('id');
                    }

                    totalSelectedLine_box2 = $(selector).find(".match_box2 .line:visible").length;
                    $(selector).find(".match_box2 .line").each(function(){
                        if($(this).data('id') === line_start + '_' + line_end && totalSelectedLine_box2 < 2) {
                            $(this).show();
                            line_start = '';
                            line_end = '';
                        }
                    });
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = 
                    $(selector).find(".match_box .line_2").is(':visible') && 
                    $(selector).find(".match_box .line_3").is(':visible') && 
                    $(selector).find(".match_box2 .line_1").is(':visible') && 
                    $(selector).find(".match_box2 .line_4").is(':visible') ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".match_box .line").hide();
                    $(selector).find(".match_box2 .line").hide();
                    line_start = '';
                    line_end = '';
                    totalSelectedLine_box1 = 0;
                    totalSelectedLine_box2 = 0;
                });
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
            }

            function exerciseFn_2() {
                const selector = $(".unit_5_lesson_3 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".dreg_box").draggable({revert: "invalid"});

                $(selector).find(".drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({top:'0px',left:'0px'});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const totalCircle = $(selector).find(".drop_box img.dreg_box").length;
                    const textbox = 1*$(selector).find(".textbox1").val();
                    isAnswerCorrected = textbox === 9 && totalCircle === 9 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".textbox1").val('');
                    $(selector).find(".drop_box").html('');
                });
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();

            function exerciseFn_1() {
            }

            function exerciseFn_2() {
                const selector = $(".unit_5_lesson_4 .exercise2");
                let isAnswerCorrected = false;
                let colorCode = '';
                $(selector).find(".colorDot").click(function(){
                    $(selector).find(".colorDot").removeClass("selected");
                    $(this).addClass("selected");
                    colorCode = $(this).data("color");
                });

                $(selector).find(".wrapperTool .flexColumn > div").click(function() {
                    const dataClasses = $(this).data("classes");
                    $(this).removeClass();
                    $(this).addClass(dataClasses).addClass(colorCode);
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const greenObject = $(selector).find(".wrapperTool .flexColumn > div.left.green").length;
                    const blueObject = $(selector).find(".wrapperTool .flexColumn > div.right.blue").length;
                    isAnswerCorrected = greenObject === 3 && blueObject === 3 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".colorDot").removeClass("selected");
                    $(selector).find(".wrapperTool .flexColumn > div").removeClass('green').removeClass('blue');
                    colorCode = '';
                });
            }

            function exerciseFn_3() {
                const selector = $(".unit_5_lesson_4 .exercise3");
                let isAnswerCorrected = false;

                $(selector).find(".clickBox").click(function() {
                    $(this).toggleClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = $(selector).find(".selected").length === 6 ? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".clickBox").removeClass("selected");
                });
            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_5_lesson_5 .exercise1");
                let isAnswerCorrected = false;

                $(selector).find(".dreg_box").draggable({revert: "invalid"});

                $(selector).find(".drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({top:'0px',left:'0px'});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = 
                    $(selector).find(".leftBox .drop_box.up img").hasClass("up") && 
                    $(selector).find(".leftBox .drop_box.down img").hasClass("down") && 
                    $(selector).find(".rightBox .drop_box.up img").hasClass("up") && 
                    $(selector).find(".rightBox .drop_box.down img").hasClass("down") ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".drop_box").html('');
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_5_lesson_5 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".dreg_box").draggable({revert: "invalid"});

                $(selector).find(".drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({top:'0px',left:'0px'});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = 
                    $(selector).find(".leftBox .drop_box.left img").hasClass("left") && 
                    $(selector).find(".leftBox .drop_box.right img").hasClass("right") && 
                    $(selector).find(".rightBox .drop_box.left img").hasClass("left") && 
                    $(selector).find(".rightBox .drop_box.right img").hasClass("right") ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".drop_box").html('');
                });
            }
        }

        function unitLesson_6_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_5_lesson_6 .exercise1");
                let isAnswerCorrected = false;

                $(selector).find(".submit_btn").on('click', function() {
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  1*$(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();

                    isAnswerCorrected = textbox1 === 9 &&  textbox2 === 8 && textbox3 === 8 && textbox4 === 9 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find("input").val('');
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_5_lesson_6 .exercise2");
                let isAnswerCorrected = false;
                $(selector).find(".clickArea").click(function(){
                    $(this).toggleClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected =  $(selector).find(".selected").length === 6 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".clickArea").removeClass("selected");
                });
            }
        }
    },
    unit_6_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();
        unitLesson_6_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                const selector = $(".unit_6_lesson_1 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".dreg_box").draggable({revert: "invalid"});

                $(selector).find(".drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({top:'0px',left:'0px'});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const totalCircle = $(selector).find(".drop_box img.dreg_box").length;
                    const textbox = 1*$(selector).find(".textbox1").val();
                    isAnswerCorrected = textbox === 10 && totalCircle === 10 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".textbox1").val('');
                    $(selector).find(".drop_box").html('');
                });
            }

        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
            }

            function exerciseFn_2() {
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();

            function exerciseFn_1() {
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_6_lesson_4 .exercise1");
                let isAnswerCorrected = false;

                $(selector).find(".dreg_box").draggable({revert: "invalid"});

                $(selector).find(".drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({top:'0px',left:'0px'});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = 
                    $(selector).find(".leftBox .drop_box.in img").hasClass("in") && 
                    $(selector).find(".leftBox .drop_box.out img").hasClass("out") && 
                    $(selector).find(".rightBox .drop_box.in img").hasClass("in") && 
                    $(selector).find(".rightBox .drop_box.out img").hasClass("out") ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".drop_box").html('');
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_6_lesson_4 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".dreg_box").draggable({revert: "invalid"});

                $(selector).find(".drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({top:'0px',left:'0px'});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = 
                    $(selector).find(".leftBox .drop_box.over img").hasClass("over") && 
                    $(selector).find(".leftBox .drop_box.under img").hasClass("under") && 
                    $(selector).find(".rightBox .drop_box.over img").hasClass("over") && 
                    $(selector).find(".rightBox .drop_box.under img").hasClass("under") ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".drop_box").html('');
                });
            }

        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_6_lesson_5 .exercise1");
                let isAnswerCorrected = false;
                $(selector).find(".clickArea> div").click(function(){
                    $(this).toggleClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const row1 = $(selector).find(".row1 .selected").length;
                    const row2 = $(selector).find(".row2 .selected").length;
                    const row3 = $(selector).find(".row3 .selected").length;
                    isAnswerCorrected = row1 === 5 && row2 === 8 && row3 === 3 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".clickArea > div").removeClass("selected");
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_6_lesson_5 .exercise2");
                let isAnswerCorrected = false;
                $(selector).find(".clickArea> div").click(function(){
                    $(this).toggleClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const row1 = $(selector).find(".row1 .selected").length;
                    const row2 = $(selector).find(".row2 .selected").length;
                    const row3 = $(selector).find(".row3 .selected").length;
                    isAnswerCorrected = row1 === 4 && row2 === 2 && row3 === 10 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".clickArea > div").removeClass("selected");
                });
            }

        }

        function unitLesson_6_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_6_lesson_6 .exercise1");
                let isAnswerCorrected = false;
                var line_start = '';
                var line_end = '';
                var totalSelectedLine = 0;

                $(selector).find(".clikBox").click(function(){
                    if($(this).hasClass('leftMatch')) {
                        line_start = $(this).data('id');
                    } else {
                        line_end = $(this).data('id');
                    }
    
                    totalSelectedLine = $(selector).find(".match_box .line:visible").length;
    
                    $(selector).find(".match_box .line").each(function(){
                        if($(this).data('id') === line_start + '_' + line_end && totalSelectedLine < 6) {
                            $(this).show();
                            line_start = '';
                            line_end = '';
                        }
                    });
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = 
                    $(selector).find(".line_3").is(':visible') && 
                    $(selector).find(".line_8").is(':visible') && 
                    $(selector).find(".line_13").is(':visible') && 
                    $(selector).find(".line_24").is(':visible') && 
                    $(selector).find(".line_29").is(':visible') && 
                    $(selector).find(".line_34").is(':visible') ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".match_box .line").hide();
                    line_start = '';
                    line_end = '';
                    totalSelectedLine = 0;
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_6_lesson_6 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".submit_btn").on('click', function() {
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  1*$(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();
                    const textbox5 =  1*$(selector).find(".textbox5").val();
                    const textbox6 =  1*$(selector).find(".textbox6").val();

                    isAnswerCorrected = textbox1 === 5 &&  textbox2 === 6 && textbox3 === 7 && textbox4 === 8 && textbox5 === 9 && textbox6 === 10 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find("input").val('');
                });
            }

        }
    },

    unit_7_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();
        unitLesson_6_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                const selector = $(".unit_7_lesson_1 .exercise2");
                let isAnswerCorrected = false;
                let colorCode = '';

                $(selector).find(".colorDot").click(function() {
                    $(selector).find(".colorDot").removeClass("selected");
                    $(this).addClass("selected");
                    colorCode = $(this).data("color");
                });

                $(selector).find(".numberArea").click(function() {
                    $(this).removeClass();
                    const classes = $(this).data("classes");
                    $(this).addClass(classes).addClass(colorCode);
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = $(selector).find(".area1").hasClass("blue") && $(selector).find(".area2").hasClass("yellow") && $(selector).find(".area3").hasClass("green") ? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".colorDot").removeClass("selected");
                    $(selector).find(".numberArea").removeClass("blue").removeClass("yellow").removeClass("green");
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                const selector = $(".unit_7_lesson_2 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".clickArea > div").click(function(){
                    $(this).toggleClass("selected");
                });

                $(selector).find(".circle").click(function(){
                    $(this).toggleClass("selected");
                })

                $(selector).find(".submit_btn").on('click', function() {
                    const circleCount = $(selector).find(".imageArea .circle1").hasClass("selected") && $(selector).find(".imageArea .circle2").hasClass("selected") && $(selector).find(".imageArea .circle3").hasClass("selected") ? true : false;
                    const leftCount = $(selector).find(".leftBox .clickArea .selected").length;
                    const rightCount = $(selector).find(".rightBox .clickArea .selected").length;

                    isAnswerCorrected = circleCount === true && leftCount === 11 && rightCount === 15 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".clickArea > div").removeClass("selected");
                    $(selector).find(".circle").removeClass("selected");
                });
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                const selector = $(".unit_7_lesson_3 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".selectionArea").click(function(){
                    $(this).toggleClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const checkedCount = $(selector).find(".selectionArea.area1").hasClass("selected") && $(selector).find(".selectionArea.area3").hasClass("selected") ? true : false;
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  $(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();
                    const textbox5 =  1*$(selector).find(".textbox5").val();
                    const textbox6 =  $(selector).find(".textbox6").val();

                    isAnswerCorrected = checkedCount === true && textbox1 === 4 &&  textbox2 === 4 && textbox3 === '=' && textbox4 === 3 && textbox5 === 3 && textbox6 === '=' ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find("input").val('');
                    $(selector).find(".selectionArea").removeClass("selected");
                });
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                const selector = $(".unit_7_lesson_4 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".submit_btn").on('click', function() {
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  1*$(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();
                    const textbox5 =  1*$(selector).find(".textbox5").val();
                    const textbox6 =  1*$(selector).find(".textbox6").val();

                    isAnswerCorrected = textbox1 === 4 &&  textbox2 === 1 && textbox3 === 5 && textbox4 === 6 && textbox5 === 4 && textbox6 === 4 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find("input").val('');
                });
            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_7_lesson_5 .exercise1");
                let isAnswerCorrected = false;

                $(selector).find(".submit_btn").on('click', function() {
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  1*$(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();
                    const textbox5 =  1*$(selector).find(".textbox5").val();
                    const textbox6 =  1*$(selector).find(".textbox6").val();
                    const textbox7 =  1*$(selector).find(".textbox7").val();

                    isAnswerCorrected = textbox1 === 0 &&  textbox2 === 1 && textbox3 === 2 && textbox4 === 3 && textbox5 === 4 && textbox6 === 5 && textbox7 === 6 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find("input").val('');
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_7_lesson_5 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".submit_btn").on('click', function() {
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  1*$(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();

                    isAnswerCorrected = textbox1 === 7 &&  textbox2 === 8 && textbox3 === 9 && textbox4 === 10 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find("input").val('');
                });
            }
        }

        function unitLesson_6_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_7_lesson_6 .exercise1");
                let isAnswerCorrected = false;

                $(selector).find(".submit_btn").on('click', function() {
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  1*$(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();
                    const textbox5 =  1*$(selector).find(".textbox5").val();

                    isAnswerCorrected = textbox1 === 2 &&  textbox2 === 4 && textbox3 === 6 && textbox4 === 8 && textbox5 === 10 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find("input").val('');
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_7_lesson_6 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".circleArea > div").click(function() {
                    $(this).parent().find("div").removeClass("selected");
                    $(this).addClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = $(selector).find(".circleArea .eight").hasClass("selected") &&
                    $(selector).find(".circleArea .five").hasClass("selected") &&
                    $(selector).find(".circleArea .six").hasClass("selected") &&
                    $(selector).find(".circleArea .ten").hasClass("selected") &&
                    $(selector).find(".circleArea .seven").hasClass("selected") ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".circleArea > div").removeClass("selected");
                });
            }
        }

    },

    unit_8_Fn: function() {
        unitLesson_1_Fn();
        unitLesson_2_Fn();
        unitLesson_3_Fn();
        unitLesson_4_Fn();
        unitLesson_5_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';
                $(".unit_8_lesson_1 .exercise2 .main_box .absArea .squareBox").click(function(){
                    $(this).addClass('selected');
                });
                $(".unit_8_lesson_1 .exercise2 .submit_btn").on('click', function() {
                    const textbox1 = $(".unit_8_lesson_1 .exercise2 .main_box .bottom_box .numSound .textbox1").val();
                    const textbox2 = $(".unit_8_lesson_1 .exercise2 .main_box .bottom_box .numSound .textbox2").val();
                    const greenBox = $(".unit_8_lesson_1 .exercise2 .main_box .absArea .greenbox.selected").length;
                    const yellowBox = $(".unit_8_lesson_1 .exercise2 .main_box .absArea .yellowbox.selected").length;
                    isUserCorrectOne = textbox1 === '3' && textbox2 === '2' && greenBox === 3 && yellowBox === 2 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_1 .exercise2 .feedback_box, .unit_8_lesson_1 .exercise2 .overlay, .unit_8_lesson_1 .exercise2 .right_feedback").show();
                        $(".unit_8_lesson_1 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_1 .exercise2 .feedback_box, .unit_8_lesson_1 .exercise2 .overlay, .unit_8_lesson_1 .exercise2 .wrong_feedback").show();
                        $(".unit_8_lesson_1 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_1 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_1 .exercise2 .feedback_box, .unit_8_lesson_1 .exercise2 .overlay, .unit_8_lesson_1 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_1 .exercise2 .reload").on('click', function() {
                    $(".unit_8_lesson_1 .exercise2 .main_box .absArea .squareBox").removeClass('selected');
                    $(".unit_8_lesson_1 .exercise2 .main_box .bottom_box .numSound input").val('');
                });
            }

            function exerciseFn_3() {

            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;
                $(".unit_8_lesson_1 .exercise4 .dreg_box").draggable({revert: "invalid"});

                $(".unit_8_lesson_1 .exercise4 .drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 1) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({opacity:0});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(".unit_8_lesson_1 .exercise4 .submit_btn").on('click', function() {
                    var circle1 = $(".unit_8_lesson_1 .exercise4 .drop_box_area .area1 img:first-child").hasClass('area1') && $(".unit_8_lesson_1 .exercise4 .drop_box_area .area1 img:last-child").hasClass('area1') ? true : false;
                    var circle2 = $(".unit_8_lesson_1 .exercise4 .drop_box_area .area2 img:first-child").hasClass('area2') && $(".unit_8_lesson_1 .exercise4 .drop_box_area .area2 img:last-child").hasClass('area2') ? true : false;
                    var circle3 = $(".unit_8_lesson_1 .exercise4 .drop_box_area .area3 img:first-child").hasClass('area3') && $(".unit_8_lesson_1 .exercise4 .drop_box_area .area3 img:last-child").hasClass('area3') ? true : false;
                    isUserCorrectOne = circle1 && circle2 && circle3 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_1 .exercise4 .feedback_box, .unit_8_lesson_1 .exercise4 .overlay, .unit_8_lesson_1 .exercise4 .right_feedback").show();
                        $(".unit_8_lesson_1 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_1 .exercise4 .feedback_box, .unit_8_lesson_1 .exercise4 .overlay, .unit_8_lesson_1 .exercise4 .wrong_feedback").show();
                        $(".unit_8_lesson_1 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_1 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_1 .exercise4 .feedback_box, .unit_8_lesson_1 .exercise4 .overlay, .unit_8_lesson_1 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_1 .exercise4 .reload").on('click', function() {
                    $(".unit_8_lesson_1 .exercise4 .drop_box ").html("");
                    $(".unit_8_lesson_1 .exercise4 .dreg_box").css({opacity:1});
                    $(".unit_8_lesson_1 .exercise4 .dreg_box").animate({top: "0px", left: "0px"});
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();
            exerciseFn_5();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                var textbox = '';
                var selectedCell = 0;
                $(".unit_8_lesson_2 .exercise2 .circleArea .circle").click(function() {
                    $(this).find('span').addClass('selected');

                    selectedCell = $(".unit_8_lesson_2 .exercise2 .circleArea .circle span.selected").length;
                    if(selectedCell === 7) {
                        $(".unit_8_lesson_2 .exercise2 .circleArea .circle_Ans span").addClass("selected");
                    }
                });

                $(".unit_8_lesson_2 .exercise2 .submit_btn").on('click', function() {
                    textbox = $(".unit_8_lesson_2 .exercise2 .fullBox .rightBox input").val();
                    isUserCorrectOne = textbox === '7' && selectedCell === 7 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_2 .exercise2 .feedback_box, .unit_8_lesson_2 .exercise2 .overlay, .unit_8_lesson_2 .exercise2 .right_feedback").show();
                        $(".unit_8_lesson_2 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_2 .exercise2 .feedback_box, .unit_8_lesson_2 .exercise2 .overlay, .unit_8_lesson_2 .exercise2 .wrong_feedback").show();
                        $(".unit_8_lesson_2 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_2 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_2 .exercise2 .feedback_box, .unit_8_lesson_2 .exercise2 .overlay, .unit_8_lesson_2 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_2 .exercise2 .reload").on('click', function() {
                    $(".unit_8_lesson_2 .exercise2 .circleArea span").removeClass("selected");
                    $(".unit_8_lesson_2 .exercise2 .fullBox .rightBox input").val('');
                    textbox = '';
                    selectedCell = 0;
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';
                var selectedCell = 0;
                $(".unit_8_lesson_2 .exercise3 .circleArea .circle").click(function() {
                    $(this).find('span').addClass('selected');

                    selectedCell = $(".unit_8_lesson_2 .exercise3 .circleArea .circle span.selected").length;
                    if(selectedCell === 9) {
                        $(".unit_8_lesson_2 .exercise3 .circleArea .circle_Ans span").addClass("selected");
                    }
                });

                $(".unit_8_lesson_2 .exercise3 .submit_btn").on('click', function() {
                    textbox1 = $(".unit_8_lesson_2 .exercise3 .fullBox .rightBox .textbox1").val();
                    textbox2 = $(".unit_8_lesson_2 .exercise3 .fullBox .rightBox .textbox2").val();
                    isUserCorrectOne = textbox2 === '1' && textbox1 === '9' && selectedCell === 9 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_2 .exercise3 .feedback_box, .unit_8_lesson_2 .exercise3 .overlay, .unit_8_lesson_2 .exercise3 .right_feedback").show();
                        $(".unit_8_lesson_2 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_2 .exercise3 .feedback_box, .unit_8_lesson_2 .exercise3 .overlay, .unit_8_lesson_2 .exercise3 .wrong_feedback").show();
                        $(".unit_8_lesson_2 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_2 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_2 .exercise3 .feedback_box, .unit_8_lesson_2 .exercise3 .overlay, .unit_8_lesson_2 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_2 .exercise3 .reload").on('click', function() {
                    $(".unit_8_lesson_2 .exercise3 .circleArea span").removeClass("selected");
                    $(".unit_8_lesson_2 .exercise3 .fullBox .rightBox input").val('');
                    textbox1 = '';
                    textbox2 = '';
                    selectedCell = 0;
                });
            }

            function exerciseFn_4() {

            }

            function exerciseFn_5() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';
                $(".unit_8_lesson_2 .exercise5 .dreg_box").draggable({revert: "invalid"});

                $(".unit_8_lesson_2 .exercise5 .drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({opacity:0});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(".unit_8_lesson_2 .exercise5 .submit_btn").on('click', function() {
                    const circle1 = $(".unit_8_lesson_2 .exercise5 .fullBox .bottomBox .imageBox img.red").length;
                    const circle2 = $(".unit_8_lesson_2 .exercise5 .fullBox .bottomBox .imageBox img.yellow").length;
                    textbox1 = $(".unit_8_lesson_2 .exercise5 .fullBox .bottomBox .textbox1").val();
                    textbox2 = $(".unit_8_lesson_2 .exercise5 .fullBox .bottomBox .textbox2").val();
                    isUserCorrectOne = circle1 == 6 && circle2 == 4 && textbox1 == '6'  && textbox2 == '4' ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_2 .exercise5 .feedback_box, .unit_8_lesson_2 .exercise5 .overlay, .unit_8_lesson_2 .exercise5 .right_feedback").show();
                        $(".unit_8_lesson_2 .exercise5 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_2 .exercise5 .feedback_box, .unit_8_lesson_2 .exercise5 .overlay, .unit_8_lesson_2 .exercise5 .wrong_feedback").show();
                        $(".unit_8_lesson_2 .exercise5 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_2 .exercise5 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_2 .exercise5 .feedback_box, .unit_8_lesson_2 .exercise5 .overlay, .unit_8_lesson_2 .exercise5 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_2 .exercise5 .reload").on('click', function() {
                    $(".unit_8_lesson_2 .exercise5 .fullBox .bottomBox input").val('');
                    $(".unit_8_lesson_2 .exercise5 .drop_box ").html("");
                    $(".unit_8_lesson_2 .exercise5 .dreg_box").css({opacity:1});
                    $(".unit_8_lesson_2 .exercise5 .dreg_box").animate({top: "0px", left: "0px"});
                    isUserCorrectOne = false;
                    textbox1 = '';
                    textbox2 = '';
                });
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();
            exerciseFn_5();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                var textbox = '';

                $(".unit_8_lesson_3 .exercise2 .submit_btn").on('click', function() {
                    textbox = $(".unit_8_lesson_3 .exercise2 .bottom_box .input_area input.inputbox1").val();
                    isUserCorrectOne = textbox === '5'  ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_3 .exercise2 .feedback_box, .unit_8_lesson_3 .exercise2 .overlay, .unit_8_lesson_3 .exercise2 .right_feedback").show();
                        $(".unit_8_lesson_3 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_3 .exercise2 .feedback_box, .unit_8_lesson_3 .exercise2 .overlay, .unit_8_lesson_3 .exercise2 .wrong_feedback").show();
                        $(".unit_8_lesson_3 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_3 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_3 .exercise2 .feedback_box, .unit_8_lesson_3 .exercise2 .overlay, .unit_8_lesson_3 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_3 .exercise2 .reload").on('click', function() {
                    $(".unit_8_lesson_3 .exercise2 .bottom_box .input_area input.inputbox1").val('');
                    textbox = '';
                });
            }

            function exerciseFn_3() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';

                $(".unit_8_lesson_3 .exercise3 .submit_btn").on('click', function() {
                    textbox1 = $(".unit_8_lesson_3 .exercise3 .bottom_box .input_area input.inputbox2").val();
                    textbox2 = $(".unit_8_lesson_3 .exercise3 .bottom_box .input_area input.inputbox1").val();
                    isUserCorrectOne = textbox1 === '2' && textbox2 === '8' ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_3 .exercise3 .feedback_box, .unit_8_lesson_3 .exercise3 .overlay, .unit_8_lesson_3 .exercise3 .right_feedback").show();
                        $(".unit_8_lesson_3 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_3 .exercise3 .feedback_box, .unit_8_lesson_3 .exercise3 .overlay, .unit_8_lesson_3 .exercise3 .wrong_feedback").show();
                        $(".unit_8_lesson_3 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_3 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_3 .exercise3 .feedback_box, .unit_8_lesson_3 .exercise3 .overlay, .unit_8_lesson_3 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_3 .exercise3 .reload").on('click', function() {
                    $(".unit_8_lesson_3 .exercise3 .bottom_box .input_area input").val('');
                    textbox = '';
                });
            }

            function exerciseFn_4() {

            }

            function exerciseFn_5() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';

                $(".unit_8_lesson_3 .exercise5 .submit_btn").on('click', function() {
                    textbox1 = $(".unit_8_lesson_3 .exercise5 .bottom_box .add_part .imageBox input.textbox1").val();
                    textbox2 = $(".unit_8_lesson_3 .exercise5 .bottom_box .add_part .imageBox input.textbox2").val();
                    isUserCorrectOne = textbox1 === '5' && textbox2 === '5' ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_3 .exercise5 .feedback_box, .unit_8_lesson_3 .exercise5 .overlay, .unit_8_lesson_3 .exercise5 .right_feedback").show();
                        $(".unit_8_lesson_3 .exercise5 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_3 .exercise5 .feedback_box, .unit_8_lesson_3 .exercise5 .overlay, .unit_8_lesson_3 .exercise5 .wrong_feedback").show();
                        $(".unit_8_lesson_3 .exercise5 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_3 .exercise5 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_3 .exercise5 .feedback_box, .unit_8_lesson_3 .exercise5 .overlay, .unit_8_lesson_3 .exercise5 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_3 .exercise5 .reload").on('click', function() {
                    $(".unit_8_lesson_3 .exercise5 input").val('');
                    textbox = '';
                });
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;

                $(".unit_8_lesson_4 .exercise2 .box_uper .imageBox").click(function(){
                    $(this).addClass("selected");
                });

                $(".unit_8_lesson_4 .exercise2 .submit_btn").on('click', function() {
                    isUserCorrectOne = $(".unit_8_lesson_4 .exercise2 .box_uper .imageBox.selected").length === 2 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_4 .exercise2 .feedback_box, .unit_8_lesson_4 .exercise2 .overlay, .unit_8_lesson_4 .exercise2 .right_feedback").show();
                        $(".unit_8_lesson_4 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_4 .exercise2 .feedback_box, .unit_8_lesson_4 .exercise2 .overlay, .unit_8_lesson_4 .exercise2 .wrong_feedback").show();
                        $(".unit_8_lesson_4 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_4 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_4 .exercise2 .feedback_box, .unit_8_lesson_4 .exercise2 .overlay, .unit_8_lesson_4 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_4 .exercise2 .reload").on('click', function() {
                    $(".unit_8_lesson_4 .exercise2 .box_uper .imageBox").removeClass("selected");
                });
            }

            function exerciseFn_3() {
                var line_start = '';
                var line_end = '';
                var totalSelectedLine = 0;
                var isUserCorrect = false;

                $(".unit_8_lesson_4 .exercise3 .clikBox").click(function(){
                    if($(this).hasClass('leftMatch')) {
                        line_start = $(this).data('id');
                    } else {
                        line_end = $(this).data('id');
                    }

                    totalSelectedLine = $("unit_8_lesson_4 .exercise3 .match_box .line:visible").length;

                    $(".unit_8_lesson_4 .exercise3 .match_box .line").each(function(){
                        if($(this).data('id') === line_start + '_' + line_end && totalSelectedLine < 3) {
                            $(this).show();
                            line_start = '';
                            line_end = '';
                        }
                    })
                });

                $(".unit_8_lesson_4 .exercise3 .submit_btn").on('click', function() {
                    isUserCorrectOne = $(".unit_8_lesson_4 .exercise3 .line_3").is(':visible') && $(".unit_8_lesson_4 .exercise3 .line_4").is(':visible') && $(".unit_8_lesson_4 .exercise3 .line_8").is(':visible') ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_4 .exercise3 .feedback_box, .unit_8_lesson_4 .exercise3 .overlay, .unit_8_lesson_4 .exercise3 .right_feedback").show();
                        $(".unit_8_lesson_4 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_4 .exercise3 .feedback_box, .unit_8_lesson_4 .exercise3 .overlay, .unit_8_lesson_4 .exercise3 .wrong_feedback").show();
                        $(".unit_8_lesson_4 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_4 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_4 .exercise3 .feedback_box, .unit_8_lesson_4 .exercise3 .overlay, .unit_8_lesson_4 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_4 .exercise3 .reload").off("click").on("click", function() {
                    $(".unit_8_lesson_4 .exercise3 .match_box .line").hide();
                    line_start = '';
                    line_end = '';
                    isUserCorrect = false;
                    totalSelectedLine =0;
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;
                $(".unit_8_lesson_4 .exercise4 .box1 .chack").click(function(){
                    $(".unit_8_lesson_4 .exercise4 .box1 .chack").removeClass('selected');
                    $(this).addClass('selected');
                });
                $(".unit_8_lesson_4 .exercise4 .box2 .chack").click(function(){
                    $(".unit_8_lesson_4 .exercise4 .box2 .chack").removeClass('selected');
                    $(this).addClass('selected');
                });
                $(".unit_8_lesson_4 .exercise4 .submit_btn").on('click', function() {
                    isUserCorrectOne = $(".unit_8_lesson_4 .exercise4 .check_box1").hasClass('selected') && $(".unit_8_lesson_4 .exercise4 .check_box3").hasClass('selected') ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_4 .exercise4 .feedback_box, .unit_8_lesson_4 .exercise4 .overlay, .unit_8_lesson_4 .exercise4 .right_feedback").show();
                        $(".unit_8_lesson_4 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_4 .exercise4 .feedback_box, .unit_8_lesson_4 .exercise4 .overlay, .unit_8_lesson_4 .exercise4 .wrong_feedback").show();
                        $(".unit_8_lesson_4 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_4 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_4 .exercise4 .feedback_box, .unit_8_lesson_4 .exercise4 .overlay, .unit_8_lesson_4 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_4 .exercise4 .reload").on('click', function() {
                    $(".unit_8_lesson_4 .exercise4 .chack").removeClass('selected');
                });
            }
        }

        function unitLesson_5_Fn() {
            exerciseFn_1();
            exerciseFn_2();
            exerciseFn_3();
            exerciseFn_4();

            function exerciseFn_1() {

            }

            function exerciseFn_2() {
                var isUserCorrectOne = false;
                $(".unit_8_lesson_5 .exercise2 .dreg_box").draggable({revert: "invalid"});

                $(".unit_8_lesson_5 .exercise2 .drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({top:'0px',left:'0px'});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(".unit_8_lesson_5 .exercise2 .submit_btn").on('click', function() {
                    const pattern1 = $(".unit_8_lesson_5 .exercise2 .flexbox1 .flexCol2 img").hasClass('triangle') && $(".unit_8_lesson_5 .exercise2 .flexbox1 .flexCol3 img").hasClass('circle')  && $(".unit_8_lesson_5 .exercise2 .flexbox1 .flexCol4 img").hasClass('triangle') ? true : false;
                    const pattern2 = $(".unit_8_lesson_5 .exercise2 .flexbox2 .flexCol2 img").hasClass('rhumb') && $(".unit_8_lesson_5 .exercise2 .flexbox2 .flexCol3 img").hasClass('rhumb')  && $(".unit_8_lesson_5 .exercise2 .flexbox2 .flexCol4 img").hasClass('circle2') ? true : false;
                    const pattern3 = $(".unit_8_lesson_5 .exercise2 .flexbox3 .flexCol2 img").hasClass('circle3') && $(".unit_8_lesson_5 .exercise2 .flexbox3 .flexCol3 img").hasClass('circle3')  && $(".unit_8_lesson_5 .exercise2 .flexbox3 .flexCol4 img").hasClass('square') ? true : false;
                    isUserCorrectOne = pattern1 && pattern2 && pattern3 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_5 .exercise2 .feedback_box, .unit_8_lesson_5 .exercise2 .overlay, .unit_8_lesson_5 .exercise2 .right_feedback").show();
                        $(".unit_8_lesson_5 .exercise2 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_5 .exercise2 .feedback_box, .unit_8_lesson_5 .exercise2 .overlay, .unit_8_lesson_5 .exercise2 .wrong_feedback").show();
                        $(".unit_8_lesson_5 .exercise2 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_5 .exercise2 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_5 .exercise2 .feedback_box, .unit_8_lesson_5 .exercise2 .overlay, .unit_8_lesson_5 .exercise2 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_5 .exercise2 .reload").on('click', function() {
                    $(".unit_8_lesson_5 .exercise2 .drop_box ").html("");
                });
            }

            function exerciseFn_3() {
                var selectedColor = '';
                $(".unit_8_lesson_5 .exercise3 .fullBox .colorPallet > div").click(function(){
                    $(".unit_8_lesson_5 .exercise3 .fullBox .colorPallet > div").removeClass('selected');
                    selectedColor = $(this).data("color");
                    $(this).addClass('selected');
                });

                $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .clickable .imageBox").click(function(){
                    const dataClasses = $(this).data('classes');
                    $(this).removeClass();
                    $(this).addClass(dataClasses).addClass(selectedColor);
                });

                $(".unit_8_lesson_5 .exercise3 .submit_btn").on('click', function() {
                    const pattern1 = $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .imageBox.banana").hasClass('yellow') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .imageBox.grapes").hasClass('blue') ? true : false;
                    const pattern2 =$(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box2 div:nth-child(5) .imageBox.apple").hasClass('red') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box2 div:nth-child(6) .imageBox.apple").hasClass('green') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box2 div:nth-child(7) .imageBox.apple").hasClass('red') ? true : false;
                    const lycheePattern = $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(1) .imageBox.lychee").hasClass('pink') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(3) .imageBox.lychee").hasClass('pink') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(5) .imageBox.lychee").hasClass('pink') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(7) .imageBox.lychee").hasClass('pink') ? true : false;
                    const pineCPattern = $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(2) .imageBox.pine").hasClass('grey') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(4) .imageBox.pine").hasClass('grey') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(6) .imageBox.pine").hasClass('grey') && $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox.box3 div:nth-child(8) .imageBox.pine").hasClass('grey') ? true : false;
                    const pattern3 = lycheePattern && pineCPattern ? true : false;
                    isUserCorrectOne = pattern1 && pattern2 && pattern3 ?  true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_5 .exercise3 .feedback_box, .unit_8_lesson_5 .exercise3 .overlay, .unit_8_lesson_5 .exercise3 .right_feedback").show();
                        $(".unit_8_lesson_5 .exercise3 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_5 .exercise3 .feedback_box, .unit_8_lesson_5 .exercise3 .overlay, .unit_8_lesson_5 .exercise3 .wrong_feedback").show();
                        $(".unit_8_lesson_5 .exercise3 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_5 .exercise3 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_5 .exercise3 .feedback_box, .unit_8_lesson_5 .exercise3 .overlay, .unit_8_lesson_5 .exercise3 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_5 .exercise3 .reload").on('click', function() {
                    $(".unit_8_lesson_5 .exercise3 .fullBox .colorPallet > div").removeClass('selected');
                    $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .clickable .imageBox").removeClass('yellow');
                    $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .clickable .imageBox").removeClass('blue');
                    $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .clickable .imageBox").removeClass('red');
                    $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .clickable .imageBox").removeClass('green');
                    $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .clickable .imageBox").removeClass('pink');
                    $(".unit_8_lesson_5 .exercise3 .fullBox .flexBox .clickable .imageBox").removeClass('grey');
                    selectedColor = '';
                });
            }

            function exerciseFn_4() {
                var isUserCorrectOne = false;
                var textbox1 = '';
                var textbox2 = '';
                $(".unit_8_lesson_5 .exercise4 .dreg_box").draggable({revert: "invalid"});

                $(".unit_8_lesson_5 .exercise4 .drop_box").droppable({
                    drop: function(event, ui) {
                        var getDropedElmLen = $(this).children(".dreg_box").length;
                        if (getDropedElmLen <= 0) {
                            $(this).append($(ui.draggable).clone());
                            ui.draggable.css({opacity:0});
                        } else {
                            ui.draggable.animate({top:'0px',left:'0px'});
                        }
                    }
                });

                $(".unit_8_lesson_5 .exercise4 .submit_btn").on('click', function() {
                    const selector = $(".unit_8_lesson_5 .exercise4 .fullBox .drop_box_area");
                    const patern1 = $(selector).find("div:first-child img").hasClass('image1') && $(selector).find("div:nth-child(2) img").hasClass('image2') && $(selector).find("div:nth-child(3) img").hasClass('image1') && $(selector).find("div:last-child img").hasClass('image2') ? true : false;
                    isUserCorrectOne = patern1 ? true : false;

                    if (isUserCorrectOne) {
                        $(".unit_8_lesson_5 .exercise4 .feedback_box, .unit_8_lesson_5 .exercise4 .overlay, .unit_8_lesson_5 .exercise4 .right_feedback").show();
                        $(".unit_8_lesson_5 .exercise4 .wrong_feedback").hide();
                    } else {
                        $(".unit_8_lesson_5 .exercise4 .feedback_box, .unit_8_lesson_5 .exercise4 .overlay, .unit_8_lesson_5 .exercise4 .wrong_feedback").show();
                        $(".unit_8_lesson_5 .exercise4 .right_feedback").hide();
                    }
                });

                $(".unit_8_lesson_5 .exercise4 .close_popup").off("click").on("click", function() {
                    $(".unit_8_lesson_5 .exercise4 .feedback_box, .unit_8_lesson_5 .exercise4 .overlay, .unit_8_lesson_5 .exercise4 .wrong_feedback").hide();
                });

                $(".unit_8_lesson_5 .exercise4 .reload").on('click', function() {
                    $(".unit_8_lesson_5 .exercise4 .drop_box ").html("");
                    $(".unit_8_lesson_5 .exercise4 .dreg_box").css({opacity:1});
                    $(".unit_8_lesson_5 .exercise4 .dreg_box").animate({top: "0px", left: "0px"});
                    isUserCorrectOne = false;
                });
            }
        }
    }
}

function checkStatus(selector, answer) {
    $(selector).find(".feedback_box").show();
    $(selector).find(".overlay").show();

    if (answer) {
        $(selector).find(".right_feedback").show();
        $(selector).find(".wrong_feedback").hide();
    } else {
        $(selector).find(".right_feedback").hide();
        $(selector).find(".wrong_feedback").show();
    }
}

function closePopup(selector) {
    $(selector).find(".feedback_box").hide();
    $(selector).find(".overlay").hide();
}