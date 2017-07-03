$(function() {
	$(".banner").css({
		width: 1920 * $(".banner a").length
	});
	/*记录播放索引值*/
	var n = 0;
	/*播放函数*/
	function runLeft() {
		if (n < $(".banner a").length - 1) {
			n = n + 1;
		} else {
			$(".banner").css({
				marginLeft: -960
			});
			n = 1;
		}
		$(".banner").stop().animate({
			marginLeft: (-960 - 1920 * n)
		}, 3000);
		$(".ctrl span").removeClass("currentspan");
		if (n == $(".banner a").length - 1) {
			$(".ctrl span").eq(0).addClass("currentspan");
		} else {
			$(".ctrl span").eq(n).addClass("currentspan");
		}
	}
	var timer = setInterval(runLeft, 9000);
	$(".ctrl span").hover(function() {
		clearInterval(timer);
		n = $(".ctrl span").index(this);
		$(".banner").stop().animate({
			marginLeft: (-960 - 1920 * n)
		}, 3000);
		$(".ctrl span").removeClass("currentspan");
		$(this).addClass("currentspan");
	}, function() {
		timer = setInterval(runLeft, 9000);
	})

	$(".bb01").mouseenter(function() {
		$(this).children(".bbb01").show();
		$(this).children(".im01").hide();
		$(this).addClass("lei12");
		$(this).siblings().removeClass("lei12");
		$(this).siblings().removeClass("lei14");
		$(this).children().children(".bb0101").addClass("lei13");
		$(this).siblings().children(".bb0101").removeClass("lei13");
	})
	$(".bb01").mouseleave(function() {
		$(this).children(".bbb01").hide();
		$(this).children(".im01").show();
		$(this).removeClass("lei12");
		$(this).siblings().removeClass("lei12");
		$(this).siblings().removeClass("lei14");
		$(this).children().children(".bb0101").removeClass("lei13");
		$(this).siblings().children(".bb0101").removeClass("lei13");
	})
	$(".bbb01").mouseenter(function() {
		$(this).show();
		$(this).parent().children(".im01").hide();
		$(this).parent(".bb01").addClass("lei12");
		$(this).parent(".bb01").siblings().removeClass("lei12");
		$(this).parent(".bb01").siblings().removeClass("lei14");
		$(this).siblings().children(".bb0101").addClass("lei13");
		$(this).parent(".bb01").siblings().children().children(".bb0101").removeClass("lei13");
	})
	$(".bbb01").mouseleave(function() {
		$(".bbb01").hide();
		$(".bb01 img").show();
		$(".bb01").removeClass("lei12");
		$(".bb0101").removeClass("lei13");
	})
})
//<!--特价商品js 和新闻区域-->
function test(name, count, index) {
	if (name == 'choice') {
		$('#choice>a').removeClass('active').eq(index - 1).addClass('active');
	}
	if (name == 'change') {
		$('#change  a').removeClass('active').eq(index - 1).addClass('active');
	}
	if (name == 'order') {
		$('#order  a').removeClass('active').eq(index - 1).addClass('active');
	}
	if (name == 'spciallist') {
		$('#spciallist  li').removeClass('active').eq(index - 1).addClass('active');
	}
	var tmpObject = null;
	var viewFlag = "block"
	for (var i = 1; i <= count; i++) {
		tmpObject = document.getElementById(name + "_" + i);
		if (i == index) {
			viewFlag = "block";
		} else {
			viewFlag = "none";
		}
		tmpObject.style.display = viewFlag;
	}
}
//点击加背景	
$(document).ready(function() {
	$(".iconarrow .iconarrow1").each(function() {
		$(this).click(function() {
			$(this).css("background", "#0294FF");
		});

	});
});
//三级导航高度调控
$(function() {
	var strheight = 51;
	$(".bbb01").each(function(index, element) {
		strheight += -52;
		$(element).css("top", strheight + "px");
	})
})