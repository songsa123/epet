var aItem1 = document.querySelectorAll("#wrap .wrap-cons");
var aSpan1 = document.querySelectorAll(".title-food li");
var oWrap1 = document.getElementById("#wrap");
var nowIndex1 = 0; // 当前显示的下标;

for(let i = 0 ; i < aSpan1.length ; i ++){
    aSpan1[i].onmouseenter = function(){
        nowIndex1 = i;
        animate1();
    }
}
function animate1(){
    // 动画效果;
    for(var i = 0 ; i < aItem1.length ; i ++){
        aItem1[i].className = "";
        aSpan1[i].className = "";
    }
    aItem1[nowIndex1].className = "active4";
    // span效果;
    aSpan1[nowIndex1].className = "active2";
    
}
