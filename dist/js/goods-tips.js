$('.by').find('li').mouseenter(function(){
    // alert()
    $(this).find('div').css("display","block")
})
$('.by').find('li').mouseleave(function(){
    // alert()
    $(this).find('div').css("display","none")
})