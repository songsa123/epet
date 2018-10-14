// 现在的时间 11 09 33; 时间获取定格在这里;
        // 只获取了一次;
        var d2 = new Date("2018/10/17 10:41:00")
        // 截止的事件;
        function time(){
            var d =new Date() 
            var  a = (d2.getTime()-d.getTime()) / 1000;
            if(a > 0){
                var nDay = parseInt(a /(60*60*24));
                var nHour = parseInt((a / (60*60)) % 24);
                var nMinute = parseInt((a / 60) % 60);
                var nSecond = parseInt(a % 60)
                if(nDay < 10){
                        nDay = "0" + nDay;
                }
                if(nHour < 10){
                        nHour = "0" + nHour;
                }
                if(nMinute < 10){
                    nMinute = "0" + nMinute;
                }
                if(nSecond < 10){
                    nSecond = "0" + nSecond;
                }
                day1.innerHTML = nDay
                hour1.innerHTML = nHour
                minute1.innerHTML = nMinute
                second1.innerHTML = nSecond
            }
            // else{
            //     alert("活动结束")
            // }
        }
        setInterval(function(){
                time()
        }, 1000)
        time();