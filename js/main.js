//1轮播图
(function(){
	var aContent=$('.container ul li');
	var aHeader=$('.container .dot li');
	var atext=$('.container ul li div');
	var iNow=0;
	var timer=null;
	for(var i=0;i<aHeader.length;i++){
		aHeader[i].index=i;
		aHeader[i].onclick=function(){
			iNow=this.index;
			tab();
		};
	}
	$('#next').onclick=toNext;
	$('#prev').onclick=function(){
		iNow--;
		if(iNow<0){
			iNow=2;
		}
		tab();
	};
	timer=setInterval(toNext,5000);
	$('#container').onmouseover=function(){
		clearInterval(timer)
	};
	$('#container').onmouseout=function(){
		timer=setInterval(toNext,5000);
	};
	function toNext(){
		iNow++;
		iNow%=3;
		tab();
	}
	function tab(){
		for(var i=0;i<aHeader.length;i++){
			aHeader[i].className='';
			aContent[i].style.opacity='0';
			atext[i].style.display='none';
			aContent[i].style.zIndex=1;
			move(aContent[i],{opacity:0},{duration:700});
		}
		atext[iNow].style.display='block';
		aHeader[iNow].className='active';
		aContent[iNow].style.zIndex=2;
		move(aContent[iNow],{opacity:1},{duration:700});
		
	}
	
})()
textShow();
function textShow(){
	var str = "2015年11月-2016年12月-省家网络科技有限公司-前端开发工程师---工作期间主要负责---整个页面的切图---HTML和CSS完成整个页面的静态布局---PC端和移动端的制作和布局---用原生JS或jQuery写PC页面动效---接下来--------梦想在继续----我会一直在前端的知识海洋中远航-------------------------------------请记住我的名字----韩鹏程";
var oDivText1=document.getElementById("text1");	
	for(var i = 0; i < str.length; i++){
		var oSpan = document.createElement("span");
		oSpan.innerHTML = str.charAt(i);
		oSpan.style.opacity=0;
		oDivText1.appendChild(oSpan);
	}
	
	var aSpan = oDivText1.getElementsByTagName("span");
	var i2 = 0;
	var timer = null;
	timer = setInterval(function(){
		move(aSpan[i2],{opacity:1});
		i2++;
		if(i2 == str.length){
			clearInterval(timer);
		}
			
	},100);
	
	
};

	

