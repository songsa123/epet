// $(".cq").mouseenter(function(){
//     $(this).next().css("display","block");
// })
// $(".region").mouseleave(function(){
//     $(this).css("display","none");
// })
$('.nava-left').mouseenter(function(){    
    $(this).parent().parent().parent().next().find('.listb').css("display","block");
    $(this).parent().parent().parent().next().find('.list1').css("display","none");
    
})
$('.nava-right').mouseenter(function(){
    $(this).parent().parent().parent().next().find('.list1').css("display","block");
    $(this).parent().parent().parent().next().find('.listb').css("display","none");
})
// 侧栏部分
$('.list-top').mouseenter(function(){
    //alert();
    $(this).find('.pic-dog').animate({left:"-27px"},500);
    
})
$('.list-top').mouseleave(function(){
    //alert();
    $(this).find('.pic-dog').animate({left:"0"},200);
    
})
$('.list-center').mouseenter(function(){
    //alert();
    $(this).find('.pic-cat').animate({left:"-27px"},500);
    
})
$('.list-center').mouseleave(function(){
    //alert();
    $(this).find('.pic-cat').animate({left:"0"},200);
    
})
$('.list-bottom').mouseenter(function(){
    //alert();
    $(this).find('.pic-fish').animate({left:"-27px"},500);
    
})
$('.list-bottom').mouseleave(function(){
    //alert();
    $(this).find('.pic-fish').animate({left:"0"},200);
    
})


