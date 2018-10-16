var oSmall3 = document.getElementById("small3");
	var oSmallImg3 = oSmall3.children[2];
	// 小框;
	var oFrame3 = document.getElementById("frame3");
	var oBig3 = document.getElementById("big3");
	var oBigImg3 = oBig3.children[0];

	oSmall3.onmouseenter = function(){
		// 小框和大图都显示出来;
		oBig3.style.display = "block";
		oFrame3.style.display = "block";
		oSmallImg3.style.opacity = 0.3;
	}
	oSmall3.onmouseleave = function(){
		// 小框和大图都隐藏;
		oBig3.style.display = "none";
		oFrame3.style.display = "none";
		oSmallImg3.style.opacity = 1;
	}
	oSmall3.onmousemove = function(event){
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
		var maxLeft = oSmall3.offsetWidth - oFrame3.offsetWidth;
		var maxTop = oSmall3.offsetHeight - oFrame3.offsetHeight;
		
		nLeft = nLeft > maxLeft ? maxLeft : nLeft;
		nTop = nTop > maxTop ? maxTop : nTop;

		oFrame3.style.left = nLeft +"px";
		oFrame3.style.top = nTop +  "px";

		// 边界检测;
		
		// 比例 已知 是4;
		// 比例分成两部分;
		var propX = oBig3.offsetWidth / oFrame3.offsetWidth;
		var propY = oBig3.offsetHeight / oFrame3.offsetHeight;

		// console.log(propX,propY);
		
		oBigImg3.style.left = -nLeft * propX + "px";
		oBigImg3.style.top = -nTop * propY + "px";

		oFrame3.style.backgroundPosition = `${-nLeft}px ${-nTop}px`
	}	