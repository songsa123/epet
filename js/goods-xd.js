var cs=document.getElementById("cs-left-1")
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(scrollTop);
    if(scrollTop >= 1200){
        cs.style.position = "fixed"
        cs.style.height=195+"px";
        cs.style.top = 0 ;


    }else{
        cs.style.position = "fixed";
        cs.style.top = 1100+"px" ;
    }
}