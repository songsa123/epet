//吸顶菜单
var oCar = document.getElementById("d-car");   	
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop >= 28){
        oCar.style.position = "fixed"
        oCar.style.height="28"+"px";

    }else{
        oCar.style.position = "absolute";
        oCar.style.top = 0 ;
    }
}