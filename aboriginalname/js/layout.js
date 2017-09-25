$(document).ready(function(){

//文章註解    
let $annoBtn = $(".annotation--mark");

$annoBtn.click(function(){
    $(this).parent().next(".annotation").toggleClass("show");
});

//延伸閱讀 tab
{
$("ul.tabs li").click(function(){

    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tabcontent").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id ).addClass("current");

});
}

//lightbox
$(".lbtrigger").click(function(){
    lbOpen($(this));
});   

$(".lbClose").click(function(){
    lbClose();
});

$(".lbOverlay").click(function(){
    lbClose();
});


function lbOpen(target){
    var lb_id = target.attr("data-lb");
    $("#" + lb_id ).addClass("active");
    $("html").addClass("stop-scroll");
}

function lbClose(){
    $(".lightbox").removeClass("active");
    $("html").removeClass("stop-scroll");
}



//測試用選單，發佈前請移除
$("body").append("<div id='testnav'></div>");
$("#testnav").load("test.html",function(){
    console.log("test nav loaded");
});



});