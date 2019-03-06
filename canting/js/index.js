//点击按钮切换图片
var allbts = document.getElementsByClassName('btn');
allbts.constructor.prototype.indexOf = Array.prototype.indexOf;
var imgs = document.getElementsByClassName('product-img');
var btnCon = document.getElementsByClassName('btn-con')[0];
btnCon.onclick = function(e) {
	console.log(btnCon);
	var e = e || window.event;
	var target = e.target || e.srcElement;
	console.log(target.nodeName);
	if(target.nodeName.toLocaleLowerCase() == 'li') {
		var num = allbts.indexOf(target);
		num += 1;
		for(var i = 0; i < imgs.length; i++) {
			imgs[i].setAttribute('src', '../img/index/img-' + num + '.png')
		}
	}
}

//图片从左到右显示
var carousel = document.getElementsByClassName('mywrap')[0];
var arrowLeft = document.getElementsByClassName('arrow-left')[0];
var arrowRight = document.getElementsByClassName('arrow-right')[0];
var num = 195;
var flag = 1;
var move = function() {
	carousel.style.left = parseInt(carousel.style.left) - num * flag + "px";
}

arrowLeft.onclick = function(e) {
	flag = 1;
	e.preventDefault();
	move();
}
arrowRight.onclick = function(e) {
	e.preventDefault();
	flag = (-1);
	move()
}
//切换放大图片
$(".imgg").mouseenter(function() {
	var $this = $(this);
	var $div = $this.find(".innerr div");
	$div.eq(1).stop();
	$div.eq(1).css({
		"top": "0px",
		"left": "0px",
		"width": "100px",
		"height": "100px"
	});
	$div.eq(0).stop().animate({
		"top": "-2px",
		"left": "-2px",
		"width": "100px",
		"height": "100px",
		"opacity": "0"
	}, 500);
	$div.eq(1).stop().animate({
		"top": "-2px",
		"left": "-2px",
		"width": "100px",
		"height": "100px",
		"opacity": "1"
	}, 500);
}).mouseleave(function() {
	var $this = $(this);
	var $div = $this.find(".innerr div");
	$div.eq(0).stop().animate({
		"top": "0",
		"left": "0",
		"width": "100px",
		"height": "100px",
		"opacity": "1"
	}, 500);
	$div.eq(1).stop().animate({
		"top": "0",
		"left": "0",
		"width": "100px",
		"height": "100px",
		"opacity": "0"
	}, 500);
});

/*
//图片从左到右显示
var carousel = $('ul.carousel'),
	arrowLeft = $('a.arrow-left'),
	arrowRight = $('a.arrow-right'),
	indicators = $('li.indicator'),
	carouselWrap = $('div.carousel-wrap');

var num = 5,
	carouselWidth = 490,
	count = 1,
	timer = null;
//设置左右箭头的点击事件
arrowLeft.click(function(e) {
	e.preventDefault()
	move(true)
})
arrowRight.click(function(e) {
	e.preventDefault()
	move()
})
// 指示器
indicators.click(function() {
	count = $(this).index()
	setIndicatorStyle()
	carousel.finish().animate({
		left: -carouselWidth * count
	}, 500)
})
// 设置指示器样式
function setIndicatorStyle() {
	indicators.eq(count - 1).addClass('active').siblings().removeClass('active')
}
 interval()
// 鼠标移入  暂停 自动轮播
carouselWrap
	.mouseover(function() {
		clearInterval(timer)
	})
	.mouseout(interval) // 鼠标移开 记录轮播
// 动画 主函数
//function move(flag) {
//	if(!flag) {
//		count++
//		l = -carouselWidth * count
//		if(count === num - 1) {
//			carousel.finish().animate({
//				left: l
//			}, 500, function() {
//				count = 1
//				setIndicatorStyle()
//				$(this).css('left', -carouselWidth * count)
//			})
//		} else {
//			setIndicatorStyle()
//			carousel.finish().animate({
//				left: l
//			}, 500)
//		}
//	} else {
//		count--
//		l = -carouselWidth * count
//		if(count === 0) {
//			carousel.finish().animate({
//				left: l
//			}, 500, function() {
//				count = num - 2
//				setIndicatorStyle()
//				$(this).css('left', -carouselWidth * count)
//			})
//		} else {
//			setIndicatorStyle()
//			carousel.finish().animate({
//				left: l
//			}, 500)
//		}
//	}
//}
// 自动轮播
//function interval() {
//	timer = setInterval(move, 2000)
//}

*/

