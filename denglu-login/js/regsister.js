// $('input').click(function(){
// 	// alert();
// 	$(this).parent().next().css ("display","block");
// })

// $('input').eq(0).focus(function(){
// 	if($(this).val().length==0){
// 		$(this).parent().next().css ("display","block");
// 		$(this).parent().next().find(".span1").text("请输入11位手机号");
// 	}
// })
// $('input').eq(1).focus(function(){
// 	if($(this).val().length==0){
// 		$(this).parent().next("div").text("建议使用数字，字母和符号两种以上的组合，6-20个字符");
// 	}
// })
// $('input').eq(2).focus(function(){
// 	if($(this).val().length==0){
// 		$(this).parent().next("div").text("请再次输入密码");
// 	}
// })
// $('input').eq(3).focus(function(){
// 	if($(this).val().length==0){
// 		$(this).parent().next("div").text("验证完后，你可以使用该手机登录和找回密码");
// 	}
// })
// $('input').eq(4).focus(function(){	
// 	if($(this).val().length==0){
// 		$(this).parent().next().next("div").text("看不清？点击图片更换验证码");
// 	}
// })
//s手机号当失去焦点的时候
$('input').eq(0).blur(function(){
	if($(this).val().length==0){
		$(this).parent().next().css ("display","block");
		$(this).parent().next().find(".span1").text("请输入11位电话号码");
		
	}else if($(this).val().length>0 && $(this).val().length<11){
		$(this).parent().next().find(".span1").text("请输入11位电话号码");
	}else if($(this).val().substr(0)!=1&&$(this).val().length!=11){
		$(this).parent().next().find(".span1").text("请输入11位电话号码");
		
	}else{
		$(this).parent().next().find(".span1").text("");
		$(this).parent().next().find(".span1").css({
		"backgroundColor":"#fff","background-imgage":"url(ok_03.jpg)no-repaeat"
		});
	}		
})
//验证码失去焦点的时候
$('input').eq(1).blur(function(){
	if($(this).val().length==0){
		$(this).parent().next().css ("display","block");
		$(this).parent().next().find(".span1").text("请输入四位验证码");
	}
})
//手机验证码失去焦点的时候
$('input').eq(2).blur(function(){
	if($(this).val().length==0){
		$(this).parent().next().css ("display","block");
		$(this).parent().next().find(".span1").text("请输入验证码");
		
	}
	
})
//用户名当失去焦点的时候
$('input').eq(3).blur(function(){
	if($(this).val().length==0){	
		$(this).parent().next().css("display","block");
		$(this).parent().next().find(".span1").text("请输入4-20位用户名");
	}else if($(this).val().length>0 && $(this).val().length<4){
		$(this).parent().next().find(".span1").text("请输入4-20位用户名");
		$(this).parent().next("div").css("color",'red');
	}else if($(this).val().length>=4&& !isNaN($(this).val())){
		$(this).parent().next("div").text("用户名不能为纯数字");
		
	}else{
		// for(var m=0;m<stuList.length;m++){
		// 	if($(this).val()==stuList[m].name){
		// 		$(this).parent().next("div").text("该用户名已被注册");
		// 		$(this).parent().next("div").css("color",'red');
		// 		return;
		// 	}				
		// }
		$(this).parent().next("div").text("");
	}		
})
	//设置密码失去焦点的时候
$('input').eq(4).blur(function(){
	if($(this).val().length==0){
		$(this).parent().next().css("display","block");
		$(this).parent().next().find(".span1").text("请输入6-20位密码");

	}else{($(this).val().length>0 && $(this).val().length<6)
		$(this).parent().next().find(".span1").text("请输入6-20位密码");
		$(this).parent().next("div").css("color",'red');
	}		
})
//确认密码失去焦点的时候
$('input').eq(5).blur(function(){
	if($(this).val().length==0){
		$(this).parent().next().css("display","block");
		$(this).parent().next().find(".span1").text("两次密码不匹配");

	}
	else{($(this).val()!=$('input').eq(4).val())
		$(this).parent().next().find(".span1").text("两次密码不匹配");
	}		
})


//	点击注册时候的判断
$("btn").click(function(e){		
	for(var j=0 ;j<8;j++){
		if($('input').eq(j).val().length==0){				
			$('input').eq(j).focus();				
			if(j==7){
				$('input').eq(j).parent().next().next("div").text("请勾选协议");
				$('input').eq(j).parent().next().next("div").css("color",'red');
				e.preventDefault();
				return;
			}
			$('input').eq(j).parent().next(".tips").text("此处不能为空");
			$('input').eq(j).parent().next(".tips").css("color",'red');	
			e.preventDefault();
			return;
		}			 
	}
			//如果勾选了
	if($(".xieyi")[0].checked){	 

	}else{						
		$(".xieyi").next().next(".tip").find(".span1").text("请勾选协议");

		return;
	}
	
})
$("#btn").click(function(){
	// alert()
	window.location.href="http://localhost/php-level2/project/epet/epet.html";
})




