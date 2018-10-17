$('.by').find('li').mouseenter(function(){
    // alert()
    $(this).find('div').css("display","block")
})
$('.by').find('li').mouseleave(function(){
    // alert()
    $(this).find('div').css("display","none")
})
// 购买显示
$('.weight').click(function(){
    $(this).find('i').toggleClass("ii");
})
// 详细信息
$('.cs-right-title').find("li").click(function(){
// alert()
// $('.o').toggleClass(".lists-cs")
// $(".cs-right-2").toggleClass('lists-cs')
var li_data = $(this).attr('data-id');       
    $(".o").css('display','none');
    
    $('.o[data-id="' + li_data + '"]').css('display','block');
})