$(document).ready(function(){

//操作示意
var $container = $(".container");
var $candidateTrigger = $(".candidate-scalewpr");

$candidateTrigger.click(function(){  
    
    var $parent = $(this).parent();
    
    if($parent.hasClass("active")){

          $parent.removeClass("active"); //取消此人選取狀態
          $container.removeClass("dim"); //關閉黑幕
        
    } else {

           $parent.addClass("active").siblings(".candidate").removeClass("active");
           $container.addClass("dim"); //開啟黑幕
    }
});

//$(".c01 .candidate-scalewpr").click();















//偵測螢幕尺寸
var $window = $(window);

function scrollDetect(){
    var scroll_top = $window.scrollTop();
    
    //scrollTop detection
    $("#sTop").text("scrollTop:"+scroll_top+"px");
    
}

function sizeDetect(){
    
    //viewport
    var wwidth = $window.width();
    var wheight = $window.height();
    $("#wwidth").text("vw:"+wwidth+"px");
    $("#wheight").text("vh:"+wheight+"px");
    
    //content zoom
    var zwidth = $("#zw").width();
    var zheight = $("#zh").height();
    $("#zwidth").text("zw:"+zwidth+"px");
    $("#zheight").text("zh:"+zheight+"px");    
}


// window scroll
$window.scroll(scrollDetect);

//window resize
$window.resize(sizeDetect).trigger("resize");


});