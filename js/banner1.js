function Banner(){}
        $.extend(Banner.prototype,{
            // 写法是兼容的;
            init : function(options){
               
               // 所有的图片;
               this.item_list = $(options.item_list);
               // 左按钮 ;
               this.left_btn = $(options.left_btn);
               // 右按钮 ;
               this.right_btn = $(options.right_btn);
               // 按钮列表;
               this.btn_list = $(options.btn_list);
               this.nowIndex = 0;
               // 有多少元素;
               this.item_num = this.item_list.length;
               this.ul = $(".goods-bottom-1 ul");
               // 获取列表中第一个元素的宽度值;
               this.item_width = this.item_list.width();
                
               this.wrap = $(".goods-bottom-1");
               if(this.left_btn.length == 0 && this.right_btn.length == 0 && this.btn_list.length == 0){
                   this.autoPlay();
                   return 0;
               }
               this.bindEvent();
            },
            bindEvent : function(){
                // this.left_btn.click(this.prev.bind(this))
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                return false;
                // this.btn_list.mouseover($.proxy(this.toIndex , this));

                // this.wrap.mouseenter($.proxy(this.stopPlay, this ));
                // this.wrap.mouseleave($.proxy(this.autoPlay, this ));

            },
            next:function(){
                if( this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1;
                    this.ul.css({
                        left : 0
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
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                // 要获取当前元素的下标么;
                var target = event.target || event.srcElement;
                // console.log(event);
                // console.log($(target).index());
                // index();
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
                // console.log(this.nowIndex);
                this.ul.stop().animate({
                    left : -this.item_width * this.nowIndex
                })
                // var index = this.nowIndex == this.item_num - 1 ? 0 : this.nowIndex; 
                // this.btn_list.eq(index).addClass("active")
                // .siblings("button").removeClass("active");
            },
           
        })

        var banner = new Banner();

        banner.init({
            item_list : ".goods-bottom-cons li",
            left_btn : "#left2",
            right_btn : "#right2",
            btn_list : ".top1 .swiper-slide" 
        })
