function showCircle(){
    $("#football-visible").toggleClass("fillColor");
}
function showCircle(){
    $("#football-visible1").toggleClass("fillColor");
}
function showCycle1(){
    $("#cycle-visible1").toggleClass("fillColor");
}
function showCycle2(){
    $("#cycle-visible2").toggleClass("fillColor");
}
function showBalloon(){
    $("#balloon-visible").toggleClass("fillColor");
}
function showBalloon(){
    $("#balloon-visible1").toggleClass("fillColor");
}
function reloadPageUnit1L1(){
    $("a.shape.star, a.shape.sun, a.shape.heart, a.shape.cloud").removeClass("yellow");
    $("div.box").removeClass("cross");
    $("img.wrong-mark, img.right-mark").removeClass("enabled");
}
function reloadPageUnit1L2(){
    $("span.dots").removeClass("clicked");
    $("div#can").removeClass("visibleOne");
	$("#num-one").val('');
}
function reloadPageUnit1L3(){
    $("#football-visible, #football-visible1, #cycle-visible1, #cycle-visible2, #balloon-visible, #balloon-visible1").removeClass("fillColor");
}
function reloadPageUnit1L5(){
    $(".colorbox1, .colorbox2, .colorbox3, .colorbox4, .colorbox5, .colorbox6").removeClass("fillColor");
}
/*function reloadPageUnit1L5(){
    $(".colorbox1, .colorbox2, .colorbox3, .colorbox4, .colorbox5, .colorbox6").removeClass("fillColor");
}*/
function reloadPageUnit1L4(){
    $("span.dots").removeClass("clicked");
    $("div#can").removeClass("visibleOneu1L4");
    $("div#can2").removeClass("visibleOneu1L4-2");
	$("#num-two").val('');
}
function reloadunit2L1(){
    $("span.dots").removeClass("clicked");
    $("div#can").removeClass("visibleOneu2L1");
    $("div#can2").removeClass("visibleOneu2L1-2");
	$("#num-three").val('');
}
function reloadunit2L3(){
    $("span.dots").removeClass("clicked");
    $("div#can").removeClass("visibleOneu2L3");
    $("div#can2").removeClass("visibleOneu2L3-2");
	$("#num-four").val('');
}
function reloadPageUnit1L6(){
    $(".line").removeClass("angle1");
    $(".line2").removeClass("line2-angle1");
    $(".line").removeClass("angle2");
    $(".line2").removeClass("line2-angle2");
    $("#dot-1, #dot-3").removeClass("clicked");
    $(".text-jinda").removeClass("incorrectL6");
    $(".text-jinda").removeClass("correctL6");
}
function reloadPageUnit2L5(){
    $("img.circle.yellow.position-absolute").addClass("none");
    $("img.circle.red.position-absolute").addClass("none");
    $("img.tri.green.position-absolute").addClass("none");
    $("img.tri.blue.position-absolute").addClass("none");
    $("img.rect.blue.position-absolute").addClass("none");
    $("img.rect.yellow.position-absolute").addClass("none");
}
function resetunit2L6p2(){
    document.getElementById("formUnit2L6").reset();
    $(".line").removeClass("angle1");
    $(".line2").removeClass("line2-angle1");
    $(".line").removeClass("angle2");
    $(".line2").removeClass("line2-angle2");
    $("#dot-1, #dot-3").removeClass("clicked");
}
function fill(n){
   var shapes=document.getElementsByClassName("shape");
   var element=n;
   shapes[n].classList.toggle("yellow");
       
}
function switcher(){
    $(".instruct").css("display","block");
    $(".pencil").css("display","none")
}
function cross(n){
    var boxes=document.getElementsByClassName("box");
    var element=n;
    boxes[n].classList.toggle("cross");
}

function check(){
    var correct=0;
    $(".correct").each(function(){
      if($(this).css('display') == 'inline'){
        correct++;
      }
    });
    
    var incorrect=0;
    $(".shape .incorrect").each(function(){
        if ($(this).css('display') == "none") {
            incorrect++;
        }
    });

    var crossCorrect=0
    $(".cross.correct").each(function(){
        if ($(this).css('display') == 'block') {
            crossCorrect++;
        }
    });
    var crossIncorrect=0;
    $(".cross.incorrect").each(function(){
        if($(this).css('display') == 'none'){
            crossIncorrect++;
        }
    });
/*    console.log("correct"+correct+" "+"incorrect"+incorrect+" "+"crossCorrect"+crossCorrect+" "+"crossIncorrect"+crossIncorrect);*/
    if (correct==4 && incorrect==2 && crossCorrect==2 && crossIncorrect==6) {
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
        $(".right-mark").addClass("enabled");
        $(".wrong-mark").removeClass("enabled");

    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
        $(".right-mark").addClass("enabled");
        $(".wrong-mark").addClass("enabled");
    }
}
function Close(){
        $(".transparentbg").css("display","none");
}

function onegirl(){
    play("data/assets/audio/one-girl.mp3")
}
function onecat(){
    play("data/assets/audio/one-cat.mp3")
}
function oneballoon(){
    play("data/assets/audio/one-balloon.mp3")
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  $(this).addClass("placed");
}

function checkunit1L2(){ 
 
    
    /*var dragLeft= $(".color-picker img").length;*/
    var correct= $(".clicked").length;
	var value1= $("#num-one").val();
    /*var incorrect= $(".clickedIncorrect").length;*/
    /*console.log("incorrect"+"="+incorrect);
    console.log("correct"+"="+correct);
    console.log("box left"+"="+dragLeft);*/
    if(correct==2 && value1== "one" )
    {
        play("data/assets/audio/good-job.mp3");
        $("div#can").addClass("visibleOne");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }

    else{
        play("data/assets/audio/oops-try-again.mp3");
        $("div#can").addClass("visibleOne");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
function checkunit2L3(){
    var correct= $(".clicked").length;
    var value4= $("#num-four").val();
    if(correct==5 && value4 == "four")
    {
        play("data/assets/audio/good-job.mp3");
        $(".u2L3 div#can").addClass("visibleOneu2L3");
        $(".u2L3 div#can2").addClass("visibleOneu2L3-2");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }

    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".u2L3 div#can").addClass("visibleOneu2L3");
        $(".u2L3 div#can2").addClass("visibleOneu2L3-2");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
function checkunit1L4(){ 
    var correct= $(".clicked").length;
	var value2= $("#num-two").val();
    if(correct==4 && value2 == "two")
    {
        play("data/assets/audio/good-job.mp3");
        $(".u1L4 div#can").addClass("visibleOneu1L4");
        $(".u1L4 div#can2").addClass("visibleOneu1L4-2");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }

    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".u1L4 div#can").addClass("visibleOneu1L4");
        $(".u1L4 div#can2").addClass("visibleOneu1L4-2");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}

function checkunit2L1(){ 
    var correct= $(".clicked").length;
	var value3= $("#num-three").val();
    if(correct==5 && value3 == "three")
   
    {
        play("data/assets/audio/good-job.mp3");
        $(".u2L1 div#can").addClass("visibleOneu2L1");
        $(".u2L1 div#can2").addClass("visibleOneu2L1-2");
        $(".dots").css("display","none");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }

    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".u2L1 div#can").addClass("visibleOneu2L1");
        $(".u2L1 div#can2").addClass("visibleOneu2L1-2");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
function checkTrace(obj){
    $(obj).toggleClass("clicked");
}
function Traceu1L4(obj){
    $(obj).toggleClass("clicked");
}
function Traceu2L1(obj){
    $(obj).toggleClass("clicked");
}
function Traceu2L3(obj){
    $(obj).toggleClass("clicked");
}
function checkunit1L3(){
    var n=$(".fillColor").length;
    if(n==6){
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}

function showsquare1(){
    $(".colorbox1").toggleClass("fillColor");
}
function showsquare2(){
    $(".colorbox2").toggleClass("fillColor");
}
function showsquare3(){
    $(".colorbox3").toggleClass("fillColor");
}
function showsquare4(){
    $(".colorbox4").toggleClass("fillColor");
}
function showsquare5(){
    $(".colorbox5").toggleClass("fillColor");
}
function showsquare6(){
    $(".colorbox6").toggleClass("fillColor");
}
function checkunit2L4(){
    var n=$(".fillColor").length;
    if(n==6){
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
function checkunit1L5(){
    var n=$(".fillColor").length;
    if(n==6){
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}


function incorrectCircle(obj){
        $(obj).toggleClass("incorrectL6");
        $(".select-2").removeClass("correctL6");
        $(".unit2L6-text.text1").removeClass("correctL6");
        
}
function correctCircle(obj){
    $(obj).toggleClass("correctL6");
    $(".select-1").removeClass("incorrectL6");
    $(".unit2L6-text.text2").removeClass("incorrectL6");
    
}
function incorrectCircle1(obj){
        $(obj).toggleClass("incorrectL6");
        $(".select-3").removeClass("correctL6");
        $(".unit2L6-text.text3").removeClass("correctL6");
}
function correctCircle1(obj){
    $(obj).toggleClass("correctL6");
    $(".select-4").removeClass("incorrectL6");
    $(".unit2L6-text.text4").removeClass("incorrectL6");
}
function incorrectCircle2(obj){
        $(obj).toggleClass("incorrectL6");
        $(".unit2L6-text.text6").removeClass("correctL6");
}
function correctCircle2(obj){
    $(obj).toggleClass("correctL6");
    $(".unit2L6-text.text5").removeClass("incorrectL6");
}
function line1(obj) {
        $(obj).addClass("clicked");   
        $("#dot-2").click(function(){
            $(".line").toggleClass("angle1");
            $("#dot-2, #dot-4").unbind();
        });
        $("#dot-4").click(function(){
            $(".line").toggleClass("angle2");
            $("#dot-2, #dot-4").unbind();
        });
        
}
function line2(obj) {
        $(obj).addClass("clicked");
        $("#dot-2").click(function(){
            $(".line2").toggleClass("line2-angle2");
            $("#dot-2, #dot-4").unbind();
        });
        $("#dot-4").click(function(){
            $(".line2").toggleClass("line2-angle1");
            $("#dot-2, #dot-4").unbind();
        });
}

function checkunit1L6(){
    var a= $(".line").hasClass("angle1");
    var b= $(".line2").hasClass("line2-angle1");
    var c= $(".number-box .select-2").hasClass("correctL6");
    var d= $(".number-box .select-3").hasClass("correctL6");
    if (a==true && b==true && c==true && d==true) {
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
		$('.add-tick').addClass("showtick");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
		$('.add-tick').addClass("showtick");
    }

}
function checkunit2L6p2(){
    var a= $(".line").hasClass("angle2");
    var b= $(".line2").hasClass("line2-angle2");
    var c= $(".unit2L6.text1").val();
    var d= $(".unit2L6.text2").val();
    if (a==true && b==true && c==3 && d==4) {
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }

}
function checkunit2L6(){
    var a= $(".unit2L6-text.text1").hasClass("correctL6");
    var b= $(".unit2L6-text.text3").hasClass("correctL6");
    var c= $(".unit2L6-text.text3").hasClass("correctL6");
    var d= $(".unit2L6-text.text6").hasClass("correctL6");
    if (a==true && b==true && c==true && d==true) {
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
function checknumbers(){
    var value1= $("#num-1").val();
    var value2= $("#num-2").val();
    var value3= $("#num-3").val();
    var value4= $("#num-4").val();
    console.log(value1+value2+value3+value4);
    if (value1==1 && value2==2 && value3==2 && value4==1) {
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
function showred(){
    $(".circle.red").removeClass("none");
}
function showyellow(){
    $(".circle.yellow").removeClass("none");
    $(".circle.red").addClass("none");
}
function showplain(){
    $(".circle.yellow").addClass("none");
}
function showTrigreen(){
    $(".tri.green").removeClass("none");
}
function showTriblue(){
    $(".tri.blue").removeClass("none");
    $(".tri.green").addClass("none");
}
function showTriplain(){
    $(".tri.blue").addClass("none");
}
function showRectblue(){
    $(".rect.blue").removeClass("none");
}
function showRectyellow(){
    $(".rect.yellow").removeClass("none");
    $(".rect.blue").addClass("none");
}
function showRectplain(){
    $(".rect.yellow").addClass("none");
}
function checkunit2L5(){
    var a=0;
    var b=0;
    var c=0;    
    if(!$(".circle.yellow").hasClass("none"))
    {
        a=1;
    }
    if(!$(".tri.blue").hasClass("none")){
        b=1;
    }
    if(!$(".rect.yellow").hasClass("none")){
        c=1;
    }
    if (a==1 && b==1 && c==1){
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else {
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
function checkunit2L5p2(){
    var a,b,c,d=0;
    if($("div#div1 img#drag4").css("display")=="block")
    {
        a=1;
        console.log("yes");
    }
    if($("div#div2 img#drag3").css("display")=="block"){
        b=1;
    }
    if($("div#div4 img#drag2").css("display")=="block"){
        c=1;console.log("yes");
    }
    if($("div#div1 img#drag4").css("display")=="block"){
        d=1;console.log("yes");
    }
    if (a==1 && b==1 && c==1 && d==1){
        play("data/assets/audio/good-job.mp3");
        $(".tryagain").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".goodjob").css("display","inline-block");
    }
    else{
        play("data/assets/audio/oops-try-again.mp3");
        $(".goodjob").css("display","none");
        $(".transparentbg").css("display","inline-block");
        $(".tryagain").css("display","inline-block");
    }
}
