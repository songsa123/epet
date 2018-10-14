$(".li-cq").mouseenter(function(){
    $(this).find(".region").css("display","block");
})
$(".li-cq").mouseleave(function(){
    // alert();
    $(this).find(".region").css("display","none");
})
$('.span1').click(function(){    
    $(this).parent().next().find('.region-1').css("display","block");
    $(this).parent().next().find('.region-2').css("display","none");
    // $(this).toggleClass('span-bac');
    $(this).addClass('span-bac');
    $(this).siblings().removeClass('span-bac');
})
$('.span2').click(function(){
    $(this).parent().next().find('.region-2').css("display","block");
    $(this).parent().next().find('.region-1').css("display","none"); 
    // $(this).toggleClass('span-bac');
    $(this).addClass('span-bac');
    $(this).siblings().removeClass('span-bac');
})



