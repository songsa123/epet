//吸顶菜单
var oD2 = document.getElementById("d2");   	
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if(scrollTop >= 28){
        oD2.style.position = "fixed"
        oD2.style.height="28"+"px";

    }else{
        oD2.style.position = "absolute";
        oD2.style.top = 0 ;
    }
}