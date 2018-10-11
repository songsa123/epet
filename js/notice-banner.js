 function Banner(){}
    $.extend(Banner.prototype,{
        init : function(options){
            // 所有的图片;
            this.item_list = $(options.item_list);
            this.nowIndex = 0;
            // 有多少元素;
            this.item_num = this.item_list.length;
            this.ul = $(".down1 #down1-cons");
            // 获取列表中第一个元素的宽度值;
            this.item_height = this.item_list.height();
            
            // this.wrap = $(".down");
        },
      
        next:function(){
            if( this.nowIndex == this.item_num - 1){
                this.nowIndex = 1;
                this.ul.css({
                    top : 0
                })
            }else{
                this.nowIndex ++;
            }
            this.animate();
        },
        prev:function(){
            // console.log(this);
            if( this.nowIndex == 0){
                this.nowIndex = this.item_num - 2;
                this.ul.css({
                    top : -(this.item_num - 1) * this.item_height
                })
            }else{
                this.nowIndex --;
            }

            this.animate();
        },
        toIndex:function(event){
            // 要获取当前元素的下标么;
            var target = event.target || event.srcElement;

            this.nowIndex = $(target).index();
            this.animate();
        },
        animate:function(){

            this.ul.stop().animate({
                top : -this.item_height * this.nowIndex
            })

        },
        autoPlay:function(){
            // 自动执行;
            this.autoPlay_timer = setInterval(function(){
                this.next();

            }.bind(this),3000)
            // console.log("自动播放")
        },

    })

    var banner = new Banner();

    banner.init({
        item_list : "#down1-cons li"
  
    })

    banner.autoPlay();
 
