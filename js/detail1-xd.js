var oD=document.getElementById("ul")
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollTop);
    if(scrollTop >= 680){
        oD.style.position = "fixed"
        oD.style.height=57+"px";
        oD.style.top = 0 ;


    }else{
        oD.style.position = "absolute";
        oD.style.top = 680+"px" ;
    }
}