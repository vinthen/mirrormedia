$(document).ready(function(){

var $html = $("html");
var $lbTrigger = $(".infobox");
var $lightbox = $("#lightbox");
var $lbOverlay = $(".lightbox__overlay");
var $lbCloseBtn = $(".lightbox__close");

//lightbox
$lbTrigger.click(function(){
    openLightbox();    
});

$lbOverlay.click(function(){
    closeLightbox();    
});

$lbCloseBtn.click(function(){
    closeLightbox();    
});

function openLightbox(){
    $html.addClass("stop-scroll");
    $lightbox.addClass("show");
}

function closeLightbox(){
    $html.removeClass("stop-scroll");
    $lightbox.removeClass("show");
}



/*
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
*/

});