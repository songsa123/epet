$('.title1').click(function(){
    // alert()
    $(this).find('i').css("display","inline-block");
    $(this).find('span').css({
        "color":"#f60",
        "font-weight":"bold"
    });
    $(this).siblings().find('i').css("display","none");
    $(this).siblings().find('span').css({
        "color":"#444",
        "font-weight":"normal"
    });
})
// sec2-right
$(document).ready(function(){
    $(".p2").click(function(){
        // $(this).txt("收起")
        $(this).find(".p2-cons").toggle(200);
        // $(this).find(".p2-cons").animate({"opacity":"1"},200);
        $(this).prev().toggleClass("active");
        $(this).parent().next(".sec2-right-cons").toggleClass("active");

    });
  
});
// // 瀑布流
// $('.falls').mouseenter(function(){
//     alert()
// })