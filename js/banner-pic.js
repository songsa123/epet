var aItem = document.querySelectorAll(".pics li");
        var oLeft = document.getElementById("left");
        var oRight = document.getElementById("right");
        var aSpan = document.querySelectorAll(".btn li");

        var oWrap = document.getElementById("banner-pic");

        var nowIndex = 0; // 当前显示的下标;

        // 自增自减 都有头;
        oRight.onclick = function(){
            //                 4;
            if(nowIndex == aItem.length - 1){
                nowIndex = 0;
            }else{
                nowIndex ++;
            }
            // console.log(nowIndex);// 1 2 3 4 0  
            animate()
           
        }
        oLeft.onclick = function(){

            if(nowIndex == 0){
                nowIndex = aItem.length - 1;
            }else{
                nowIndex --;
            }
            animate()
        }

        for(let i = 0 ; i < aSpan.length ; i ++){
            aSpan[i].onmouseover = function(){
                nowIndex = i;
                animate();
            }
        }

        
        function animate(){

            // 动画效果;
            for(var i = 0 ; i < aItem.length ; i ++){
                aItem[i].className = "";
                aSpan[i].className = "";
            }
            aItem[nowIndex].className = "active";
            // span效果;
            aSpan[nowIndex].className = "active";
            
        }
        
        oWrap.onmouseenter = function(){
            clearInterval(autoPlayTimer);
        }
        oWrap.onmouseleave = function(){
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(oRight.onclick, 3000)
        }
        // 2. 动画; css3 凑合;

        var autoPlayTimer = setInterval(oRight.onclick, 3000)