$('.section1').find("li").mouseenter(function(){
    $(this).addClass("licar")
    $(this).siblings().removeClass("licar")

})