var oSmall2 = document.getElementById("small2");
	var oSmallImg2 = oSmall2.children[2];
	// 小框;
	var oFrame2 = document.getElementById("frame2");
	var oBig2 = document.getElementById("big2");
	var oBigImg2 = oBig2.children[0];

	oSmall2.onmouseenter = function(){
		// 小框和大图都显示出来;
		oBig2.style.display = "block";
		oFrame2.style.display = "block";
		oSmallImg2.style.opacity = 0.3;
	}
	oSmall2.onmouseleave = function(){
		// 小框和大图都隐藏;
		oBig2.style.display = "none";
		oFrame2.style.display = "none";
		oSmallImg2.style.opacity = 1;
	}
	oSmall2.onmousemove = function(event){
		// 1. 获取定位的x,y 值;
		var e = event || window.event;
		var offsetX = e.offsetX;
		var offsetY = e.offsetY;
		// 2. 给元素设置的left 值 和top值;
		var nLeft = offsetX  - 50;
		var nTop = offsetY - 50;
		// 边界检测;  最小值 ; 最大值;
		
		// 最小值;
		nLeft = nLeft < 0 ? 0 : nLeft;
		nTop = nTop < 0 ? 0 : nTop;

		// 最大值;
		var maxLeft = oSmall2.offsetWidth - oFrame2.offsetWidth;
		var maxTop = oSmall2.offsetHeight - oFrame2.offsetHeight;
		
		nLeft = nLeft > maxLeft ? maxLeft : nLeft;
		nTop = nTop > maxTop ? maxTop : nTop;

		oFrame2.style.left = nLeft +"px";
		oFrame2.style.top = nTop +  "px";

		// 边界检测;
		
		// 比例 已知 是4;
		// 比例分成两部分;
		var propX = oBig2.offsetWidth / oFrame2.offsetWidth;
		var propY = oBig2.offsetHeight / oFrame2.offsetHeight;

		// console.log(propX,propY);
		
		oBigImg2.style.left = -nLeft * propX + "px";
		oBigImg2.style.top = -nTop * propY + "px";

		oFrame2.style.backgroundPosition = `${-nLeft}px ${-nTop}px`
	}	