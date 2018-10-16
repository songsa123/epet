var oInp = document.querySelectorAll('.register-box input');
var oStrong = document.getElementsByTagName('strong');
var oBtn = document.getElementById('btn');
var oEm = document.getElementById('a1');
//验证码
var code;
function ran(){
	//生成随机背景颜色
	function background(){
		var rgb='rgb('+parseInt(Math.random()*255+1)+','+parseInt(Math.random()*255+1)+','+parseInt(Math.random()*255+1)+')';
		return rgb;
	}
	//生成随机字体颜色
	function fontFy(){
		var style=new Array('Viner Hand ITC常规','Vivaldi','Segoe Print','Pristina常规','Fixedsys','Latha','Meiryo','Mangal','Rockwell','Raavi','Shruti','Tunga','Vani','Vijaya');
		var num = Math.floor(Math.random()*14);
		return style[num];
	}
	code='';
	var arr = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
	for(var i=0; i<4; i++){
		var index = Math.floor(Math.random()*36);
		code += arr[index];
	}
	oStrong[0].style.background=background();
    oStrong[0].style.color=background();
    oStrong[0].style.fontFamily=fontFy();
	oStrong[0].innerHTML = code;
}
oEm.onclick =function(){
	ran();
}
ran();

//验证码验证
oInp[1].onblur =function(){
	if(oInp[1].value == ''){
		oInp[1].style.border = '1px solid #999';
	}else if(oInp[1].value == code){
		oInp[1].style.border = '1px solid #0f0';
		return true;
	}else{
		oInp[1].style.boxShadow = '2px 2px 3px #f00,-2px -2px 3px #f00,2px -2px 3px #f00,-2px 2px 3px #f00';
		oInp[1].value = '';
	}
}


// //创建cookie 
// oBtn.onclick = function(){
// 	if(oInp[0].onblur() && oInp[1].onblur() &&oInp[2].onblur() && oInp[3].onblur() && oInp[4].onblur()&& oInp[5].onblur()&& oInp[6].onblur()) {
// 		var oForm = document.getElementById('register');
// 		var emailAdd = this.parentNode.children[2].children[1].value;
// 		var psw = this.parentNode.children[3].children[1].value;
// 		var tel = this.parentNode.children[5].children[1].value;
		
// 		var date = new Date();
// 		date.setDate(date.getDate() + 30);
// 		document.cookie = "info=" + '{"email":"' + emailAdd + '","psw":"' + psw + '","tel":' + tel +'}' + ';expires=' + date + ";path=/";
// 		alert("注册成功！");
// 		location.href = "login.html";
// 	}else{
// 		// alert("信息填写有误！请重新填写");
// 	}
// }