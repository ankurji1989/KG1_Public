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
                    $(selector).find('.statusIcon').removeClass('visible');
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
                    const textbox1 = $(selector).find('.textbox1').val();
                    const textbox2 = $(selector).find('.textbox2').val();
                    isAnswerCorrected = 
                    textbox1 === 'up' && textbox2 === 'down' &&
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
                    $(selector).find('input').val('');
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
                    const textbox1 = $(selector).find('.textbox1').val();
                    const textbox2 = $(selector).find('.textbox2').val();

                    isAnswerCorrected = 
                    textbox1 === 'left' && textbox2 === 'right' &&
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
                    $(selector).find('input').val('');
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
                    const textbox1 = $(selector).find(".textbox1").val();
                    const textbox2 = $(selector).find(".textbox2").val();

                    isAnswerCorrected = 
                    textbox1 === 'in' && textbox2 === 'out' &&
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
                    $(selector).find("input").val('');
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
                    const textbox1 = $(selector).find(".textbox1").val();
                    const textbox2 = $(selector).find(".textbox2").val();

                    isAnswerCorrected = 
                    textbox1 === 'over' && textbox2 === 'under' &&
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
                    $(selector).find("input").val('');
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
                const selector = $(".unit_7_lesson_1 .exercise1");
                const imageSrc = 'data/assets/images/unit_7/Lesson_1/Page_1/';
                let isAnswerCorrected = false;

                $(selector).find(".matchDot").click(function(){
                    $(this).addClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const matchbox1 = $(selector).find('.matchbox1 .matchDot.selected').length;
                    const matchbox2 = $(selector).find('.matchbox2 .matchDot.selected').length;

                    if(matchbox1 === 2) {
                        const replaceImg = $(selector).find(".matchbox1 img").data('replace-image');
                        $(selector).find(".matchbox1 img").attr('src', imageSrc + replaceImg);
                    }
                    if(matchbox2 === 2) {
                        const replaceImg = $(selector).find(".matchbox2 img").data('replace-image');
                        $(selector).find(".matchbox2 img").attr('src', imageSrc + replaceImg);
                    }
                    isAnswerCorrected = matchbox1 === 2 && matchbox2 === 2? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".matchDot").removeClass("selected");
                    
                    const orignalImg1 = $(selector).find(".matchbox1 img").data('orignal-image');
                    $(selector).find(".matchbox1 img").attr('src', imageSrc + orignalImg1);

                    const orignalImg2 = $(selector).find(".matchbox2 img").data('orignal-image');
                    $(selector).find(".matchbox2 img").attr('src', imageSrc + orignalImg2);
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_7_lesson_1 .exercise2");
                const imageSrc = 'data/assets/images/unit_7/Lesson_1/Page_2/';
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

                $(selector).find(".matchDot").click(function(){
                    $(this).addClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const matchbox1 = $(selector).find('.matchbox1 .matchDot.selected').length;
                    if(matchbox1 === 2) {
                        const replaceImg = $(selector).find(".matchbox1 img").data('replace-image');
                        $(selector).find(".matchbox1 img").attr('src', imageSrc + replaceImg);
                    }

                    isAnswerCorrected = matchbox1 === 2 && $(selector).find(".area1").hasClass("blue") && $(selector).find(".area2").hasClass("yellow") && $(selector).find(".area3").hasClass("green") ? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".colorDot").removeClass("selected");
                    $(selector).find(".numberArea").removeClass("blue").removeClass("yellow").removeClass("green");

                    const orignalImg1 = $(selector).find(".matchbox1 img").data('orignal-image');
                    $(selector).find(".matchbox1 img").attr('src', imageSrc + orignalImg1);
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_7_lesson_2 .exercise1");
                const imageSrc = 'data/assets/images/unit_7/Lesson_2/Page_1/';
                let isAnswerCorrected = false;

                $(selector).find(".matchDot").click(function(){
                    $(this).addClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const matchbox1 = $(selector).find('.matchbox1 .matchDot.selected').length;
                    const matchbox2 = $(selector).find('.matchbox2 .matchDot.selected').length;

                    if(matchbox1 === 2) {
                        const replaceImg = $(selector).find(".matchbox1 img").data('replace-image');
                        $(selector).find(".matchbox1 img").attr('src', imageSrc + replaceImg);
                    }
                    if(matchbox2 === 2) {
                        const replaceImg = $(selector).find(".matchbox2 img").data('replace-image');
                        $(selector).find(".matchbox2 img").attr('src', imageSrc + replaceImg);
                    }
                    isAnswerCorrected = matchbox1 === 2 && matchbox2 === 2? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".matchDot").removeClass("selected");
                    
                    const orignalImg1 = $(selector).find(".matchbox1 img").data('orignal-image');
                    $(selector).find(".matchbox1 img").attr('src', imageSrc + orignalImg1);

                    const orignalImg2 = $(selector).find(".matchbox2 img").data('orignal-image');
                    $(selector).find(".matchbox2 img").attr('src', imageSrc + orignalImg2);
                });
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
                    $(selector).find('.statusIcon').removeClass('visible');
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
        unitLesson_6_Fn();

        function unitLesson_1_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_8_lesson_1 .exercise1");
                const imageSrc = 'data/assets/images/unit_8/Lesson_1/Page_1/';
                let isAnswerCorrected = false;

                $(selector).find(".matchDot").click(function(){
                    $(this).addClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const matchbox1 = $(selector).find('.matchbox1 .matchDot.selected').length;
                    const matchbox2 = $(selector).find('.matchbox2 .matchDot.selected').length;

                    if(matchbox1 === 2) {
                        const replaceImg = $(selector).find(".matchbox1 img").data('replace-image');
                        $(selector).find(".matchbox1 img").attr('src', imageSrc + replaceImg);
                    }
                    if(matchbox2 === 2) {
                        const replaceImg = $(selector).find(".matchbox2 img").data('replace-image');
                        $(selector).find(".matchbox2 img").attr('src', imageSrc + replaceImg);
                    }
                    isAnswerCorrected = matchbox1 === 2 && matchbox2 === 2? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".matchDot").removeClass("selected");
                    
                    const orignalImg1 = $(selector).find(".matchbox1 img").data('orignal-image');
                    $(selector).find(".matchbox1 img").attr('src', imageSrc + orignalImg1);

                    const orignalImg2 = $(selector).find(".matchbox2 img").data('orignal-image');
                    $(selector).find(".matchbox2 img").attr('src', imageSrc + orignalImg2);
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_8_lesson_1 .exercise2");
                const imageSrc = 'data/assets/images/unit_8/Lesson_1/Page_2/';
                let isAnswerCorrected = false;

                $(selector).find(".matchDot").click(function(){
                    $(this).addClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const matchbox1 = $(selector).find('.matchbox1 .matchDot.selected').length;

                    if(matchbox1 === 2) {
                        const replaceImg = $(selector).find(".matchbox1 img").data('replace-image');
                        $(selector).find(".matchbox1 img").attr('src', imageSrc + replaceImg);
                    }

                    isAnswerCorrected = matchbox1 === 2 ? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".matchDot").removeClass("selected");
                    
                    const orignalImg1 = $(selector).find(".matchbox1 img").data('orignal-image');
                    $(selector).find(".matchbox1 img").attr('src', imageSrc + orignalImg1);
                });
            }
        }

        function unitLesson_2_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_8_lesson_2 .exercise1");
                const imageSrc = 'data/assets/images/unit_8/Lesson_2/Page_1/';
                let isAnswerCorrected = false;

                $(selector).find(".matchDot").click(function(){
                    $(this).addClass('selected');
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const matchbox1 = $(selector).find('.matchbox1 .matchDot.selected').length;
                    const matchbox2 = $(selector).find('.matchbox2 .matchDot.selected').length;

                    if(matchbox1 === 2) {
                        const replaceImg = $(selector).find(".matchbox1 img").data('replace-image');
                        $(selector).find(".matchbox1 img").attr('src', imageSrc + replaceImg);
                    }
                    if(matchbox2 === 2) {
                        const replaceImg = $(selector).find(".matchbox2 img").data('replace-image');
                        $(selector).find(".matchbox2 img").attr('src', imageSrc + replaceImg);
                    }
                    isAnswerCorrected = matchbox1 === 2 && matchbox2 === 2? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".matchDot").removeClass("selected");
                    
                    const orignalImg1 = $(selector).find(".matchbox1 img").data('orignal-image');
                    $(selector).find(".matchbox1 img").attr('src', imageSrc + orignalImg1);

                    const orignalImg2 = $(selector).find(".matchbox2 img").data('orignal-image');
                    $(selector).find(".matchbox2 img").attr('src', imageSrc + orignalImg2);
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_8_lesson_2 .exercise2");
                let isAnswerCorrected = false;
                let colorCode = '';

                $(selector).find(".colorBox").click(function() {
                    $(selector).find(".colorBox").removeClass("selected");
                    $(this).addClass("selected");
                    colorCode = $(this).data("color");
                });

                $(selector).find(".flexBox > div").click(function(){
                    $(this).removeClass();
                    $(this).addClass(colorCode);
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected =
                    $(selector).find(".flexBox > div:nth-of-type(1)").hasClass("yellow") &&
                    $(selector).find(".flexBox > div:nth-of-type(2)").hasClass("yellow") &&
                    $(selector).find(".flexBox > div:nth-of-type(3)").hasClass("yellow") &&
                    $(selector).find(".flexBox > div:nth-of-type(4)").hasClass("yellow") &&
                    $(selector).find(".flexBox > div:nth-of-type(5)").hasClass("yellow") &&
                    $(selector).find(".flexBox > div:nth-of-type(6)").hasClass("red") &&
                    $(selector).find(".flexBox > div:nth-of-type(7)").hasClass("red") &&
                    $(selector).find(".flexBox > div:nth-of-type(8)").hasClass("red") &&
                    $(selector).find(".flexBox > div:nth-of-type(9)").hasClass("red") &&
                    $(selector).find(".flexBox > div:nth-of-type(10)").hasClass("red") &&
                    $(selector).find(".flexBox > div:nth-of-type(11)").hasClass("green") &&
                    $(selector).find(".flexBox > div:nth-of-type(12)").hasClass("green") &&
                    $(selector).find(".flexBox > div:nth-of-type(13)").hasClass("green") &&
                    $(selector).find(".flexBox > div:nth-of-type(14)").hasClass("green") &&
                    $(selector).find(".flexBox > div:nth-of-type(15)").hasClass("green") &&
                    $(selector).find(".flexBox > div:nth-of-type(16)").hasClass("blue") &&
                    $(selector).find(".flexBox > div:nth-of-type(17)").hasClass("blue") &&
                    $(selector).find(".flexBox > div:nth-of-type(18)").hasClass("blue") &&
                    $(selector).find(".flexBox > div:nth-of-type(19)").hasClass("blue") &&
                    $(selector).find(".flexBox > div:nth-of-type(20)").hasClass("blue") ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".colorBox").removeClass("selected");
                    $(selector).find(".flexBox > div").removeClass();
                    colorCode = '';
                });
            }
        }

        function unitLesson_3_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
            }

            function exerciseFn_2() {
            }
        }

        function unitLesson_4_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_8_lesson_4 .exercise1");
                let isAnswerCorrected = false;

                $(selector).find(".selectionArea").click(function() {
                    $(this).parent().find("div").removeClass("selected");
                    $(this).addClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    isAnswerCorrected = $(selector).find(".area1").hasClass("selected") && $(selector).find(".area3").hasClass("selected") && $(selector).find(".area5").hasClass("selected") ? true : false;
                    checkStatus(selector, isAnswerCorrected);
                });
                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".selectionArea").removeClass("selected");
                    $(selector).find('.statusIcon').removeClass('visible');
                });
            }

            function exerciseFn_2() {
                const selector = $(".unit_8_lesson_4 .exercise2");
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
                    const row1 = $(selector).find(".row1 .drop_box img").hasClass("square1") ? true : false;
                    const row2 = $(selector).find(".row2 .drop_box:first-child img").hasClass("square2") && $(selector).find(".row2 .drop_box:last-child img").hasClass("triangle") ? true : false;
                    const row3 = $(selector).find(".row3 .drop_box:first-child img").hasClass("rectangle") && $(selector).find(".row3 .drop_box:last-child img").hasClass("rectangle") ? true : false;
                    isAnswerCorrected = row1 && row2 && row3 ? true : false;

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
                const selector = $(".unit_8_lesson_5 .exercise1");
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
                    const box1 = $(selector).find(".drop_box1 img").length;
                    const box2 = $(selector).find(".drop_box2 img").length;
                    const box3 = $(selector).find(".drop_box3 img").length;
                    const box4 = $(selector).find(".drop_box4 img").length;
                    const box5 = $(selector).find(".drop_box5 img").length;
                    isAnswerCorrected = box1 === 4 && box2 === 8 && box3 === 3 && box4 === 1 && box5 === 6 ? true : false;
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
                const selector = $(".unit_8_lesson_5 .exercise2");
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
                    $(selector).find(".line_4").is(':visible') && 
                    $(selector).find(".line_10").is(':visible') && 
                    $(selector).find(".line_12").is(':visible') && 
                    $(selector).find(".line_16").is(':visible') && 
                    $(selector).find(".line_23").is(':visible') ? true : false;

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
        }

        function unitLesson_6_Fn() {
            exerciseFn_1();
            exerciseFn_2();

            function exerciseFn_1() {
                const selector = $(".unit_8_lesson_6 .exercise1");
                let isAnswerCorrected = false;

                $(selector).find(".submit_btn").on('click', function() {
                    const textbox1 =  1*$(selector).find(".textbox1").val();
                    const textbox2 =  1*$(selector).find(".textbox2").val();
                    const textbox3 =  1*$(selector).find(".textbox3").val();
                    const textbox4 =  1*$(selector).find(".textbox4").val();
                    const textbox5 =  1*$(selector).find(".textbox5").val();

                    isAnswerCorrected = textbox1 === 3 &&  textbox2 === 6 && textbox3 === 6 && textbox4 === 4 && textbox5 === 4 ? true : false;

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
                const selector = $(".unit_8_lesson_6 .exercise2");
                let isAnswerCorrected = false;

                $(selector).find(".clickBox > div").click(function(){
                    $(this).toggleClass("selected");
                });

                $(selector).find(".submit_btn").on('click', function() {
                    const appleCount = $(selector).find(".row1 .clickBox > div.selected").length;
                    const bagCount = $(selector).find(".row2 .clickBox > div.selected").length;
                    const ballCount = $(selector).find(".row3 .clickBox > div.selected").length;

                    isAnswerCorrected = appleCount === 3 &&  bagCount === 5 && ballCount === 2 ? true : false;

                    checkStatus(selector, isAnswerCorrected);
                });

                $(selector).find(".close_popup").off("click").on("click", function() {
                    closePopup(selector);
                });

                $(selector).find(".reload").on('click', function() {
                    $(selector).find(".clickBox > div").removeClass("selected");
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
        play('data/assets/audio/globle/good_job.mp3');
        $(selector).find('.statusIcon.right').addClass('visible');
    } else {
        $(selector).find(".right_feedback").hide();
        $(selector).find(".wrong_feedback").show();
        $(selector).find('.statusIcon').addClass('visible');
        play('data/assets/audio/globle/oops_try_again.mp3');

    }
}

function closePopup(selector) {
    $(selector).find(".feedback_box").hide();
    $(selector).find(".overlay").hide();
}
/*
(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

window.onload = toggleClass;   
window.onresize = toggleClass;

function toggleClass(){
    let globalSelector = '.global';
    if($('.dynamicpagediv').hasScrollBar()) {
        $(globalSelector).toggleClass('pageHasScroll');
    }

    if($(".exercise:visible").outerHeight() > $(".lesson").outerHeight()){
        $(globalSelector).toggleClass('pageHasScroll');
    }
}
*/