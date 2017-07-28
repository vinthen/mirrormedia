$(document).ready(function(){

let $card = $(".cardBoard");
let $cardTotal = $(".pager--total");

//偶數卡片設定較深背景
$card.filter(":odd").addClass("dark");

//標示頁數
{
    let sum = $card.length -1;
    $cardTotal.text(sum);

    $card.each(function(){
        let index = $(this).index();
        $(this).addClass("card" + "0" + index)
        .find(".pager--current").text(index -1);
    });
}

//only for firefox preview
// $card.filter(":lt(16)").remove();


//init ScrollMagic
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});

//get all slides
var slides = document.querySelectorAll(".pinSection");

//creat scene for every slide
for(var i=0; i<slides.length; i++){
    new ScrollMagic.Scene({
        triggerElement: slides[i]
    }).setPin(slides[i])   
    .addTo(controller);
}

//debug
console.log("layout.js done");

});