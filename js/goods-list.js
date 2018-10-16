$('.pica').mouseenter(function(){
    // alert()
    $(this).parent().prev().find('.pic1-a').css("display","block");
    $(this).parent().prev().find('.pic1-b').css("display","none");
    $(this).parent().prev().find('.pic1-c').css("display","none");
    $(this).parent().prev().find('.pic1-d').css("display","none");


})
$('.picb').mouseenter(function(){
    // alert()
    $(this).parent().prev().find('.pic1-b').css("display","block");
    $(this).parent().prev().find('.pic1-a').css("display","none");
    $(this).parent().prev().find('.pic1-c').css("display","none");
    $(this).parent().prev().find('.pic1-d').css("display","none");

})
$('.picc').mouseenter(function(){
    // alert()
    $(this).parent().prev().find('.pic1-c').css("display","block");
    $(this).parent().prev().find('.pic1-b').css("display","none");
    $(this).parent().prev().find('.pic1-a').css("display","none");
    $(this).parent().prev().find('.pic1-d').css("display","none");


})
$('.picd').mouseenter(function(){
    // alert()
    $(this).parent().prev().find('.pic1-d').css("display","block");
    $(this).parent().prev().find('.pic1-a').css("display","none");
    $(this).parent().prev().find('.pic1-c').css("display","none");
    $(this).parent().prev().find('.pic1-b').css("display","none");

})



// $(function() {
//     $('.btn-wrap').children('img').on('mouseenter',function(e) {
//         // $(this).find('.pic1').addClass('.pic1-a');
//         // $(this).siblings().find('.pic1').removeClass('.pic1-a');
//         // console.log( $(this))

//     })
// })