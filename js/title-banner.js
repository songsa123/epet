
$('.food-list1').mouseenter(function(){
    //alert()
    $(this).addClass('active2');
    $(this).siblings().removeClass('active2');
    // $(this).next().next().removeClass('active2');
    // $(this).next().next().next().removeClass('active2');

    $(this).parent().parent().next().find('.title-food-cons').css("display","block");
    $(this).parent().parent().next().find('.title-food-cons').siblings().css("display","none");
    // $(this).parent().parent().next().find('.foods-import').css("display","none");
    // $(this).parent().parent().next().find('.foods-domestic').css("display","none");
    // $(this).parent().parent().next().find('.foods-prescription').css("display","none");
})
$('.food-list2').mouseenter(function(){
    $(this).parent().parent().next().find('.foods-import').css("display","block");
    $(this).parent().parent().next().find('.foods-import').siblings().css("display","none");

    $(this).addClass('active2');
    $(this).siblings().removeClass('active2');
   
})
$('.food-list3').mouseenter(function(){
    $(this).parent().parent().next().find('.foods-domestic').css("display","block");
    $(this).parent().parent().next().find('.foods-domestic').siblings().css("display","none");
    // alert();
    $(this).addClass('active2');
    $(this).siblings().removeClass('active2');

   
   // alert();
})
$('.food-list4').mouseenter(function(){
    // alert()
    $(this).parent().parent().next().find('.foods-prescription').css("display","block");
    $(this).parent().parent().next().find('.foods-prescription').siblings().css("display","none");
    // alert();
    $(this).addClass('active2');
    $(this).siblings().removeClass('active2');
})

