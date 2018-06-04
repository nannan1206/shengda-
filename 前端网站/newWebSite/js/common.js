//监视页面滚动高度   	
window.onscroll = function() {
	//	var top = document.getElementsByTagName("body")[0].scrollTop;
	var top = document.documentElement.scrollTop + document.body.scrollTop;
	//	document.documentElement.scrollTop+document.body.scrollTop
	if (top > window.innerHeight) {
		$("#floatt").removeClass("floatdiv");
		$("#floatt").addClass("floatdivHide");
	} else {

		$("#floatt").removeClass("floatdivHide");
		$("#floatt").addClass("floatdiv");
	}
}
$(function() {
	var pathUrl = location.pathname.toLowerCase();
	if (pathUrl == "/" || pathUrl.startsWith("/home")) {
		$('.navFirst a').eq(0).addClass("active").siblings().removeClass("active");
	} else {
		var index = 0;
		if (pathUrl.startsWith('/aboutus')) {
			index = 1;
		} else if (pathUrl.startsWith('/product/new')) {
			index = 2;
		}
		if (index > 0) {
			$('.navFirst a').eq(index).addClass("active").siblings().removeClass("active");
		} else {
			$('.navFirst a').removeClass("active");
		}
	}
})
$(function() {
		//产品左侧栏目选中
		$(".newsList ul .listModel").mouseenter(function() {
			$(this).children("li").addClass('active');
			$(this).children(".addlistproduct").show();
		})
		$(".newsList ul .listModel").mouseleave(function() {
			$(this).children("li").removeClass('active');
			$(this).children(".addlistproduct").hide();
		})
		$(".listModel .addlistproduct").mouseenter(function() {
			$(this).parent().children("li").addClass('active');
		})
		$(".listModel .addlistproduct").mouseleave(function() {
			$(this).parent().children("li").removeClass('active');
		})
		$('.listModel li').each(function(i) {
			$(this).click(function() {
				$('.listModel li').removeClass('active').eq(i).addClass('active');
				$(".newsList ul .listModel").mouseleave(function() {					
					$('.listModel li').removeClass('active').eq(i).addClass('active');
					$(this).children(".addlistproduct").hide();
				})
				
				$(".newsList ul .listModel").mouseenter(function() {
					$('.listModel li').removeClass('active').eq(i).addClass('active');
					$(this).children(".addlistproduct").show();
				})
			})
		})
		$('.listModel .addlistproduct').each(function(i) {
			$(this).click(function() {
				$('.listModel li').removeClass('active').eq(i).addClass('active');
				$(".newsList ul .listModel").mouseleave(function() {
					$('.listModel li').removeClass('active').eq(i).addClass('active');
					$(this).children(".addlistproduct").hide();
				})
				$(".newsList ul .listModel").mouseenter(function() {
					$('.listModel li').removeClass('active').eq(i).addClass('active');
					$(this).children(".addlistproduct").show();
				})
			})
		})
		$('.newsList .addlistproduct a').each(function(i) {
				$(this).click(function() {
					$('.newsList .addlistproduct a').removeClass('active').eq(i).addClass('active');
				})
			})
			//留言类型选中状态
		$('.messClass li').each(function(i) {
				$(this).click(function() {
					$('.messClass li').removeClass('active').eq(i).addClass('active');
				})
			})
			//选中售后服务类型
		$('.citem li').each(function(i) {
			$(this).click(function() {
				$('.citem li').removeClass('active').eq(i).addClass('active');
			})
		})
	})
	//选中服务类型对应响应表单
	//立即报价点击关闭按钮关闭表单
function test(name, count, index) {
	$('#' + name + ' ' + 'li').removeClass('active').eq(index - 1).addClass('active');
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
//立即报价内页封皮添加和切换
function deleteTab(name, index) {
	$("#tab-" + index + "").hide();
	$("#tab-" + index + "").prev().addClass("active");


	$('#spciallist_' + index).hide();
	$('#spciallist_' + index).prev().show();
}


//关闭
function HideD(a) {
	$(a).parent().hide().prev().addClass('active');

}
//点击添加元素
function AddPaper(dom) {
	$('.messpasge li').removeClass('active')
	$(dom).before('<li class="active" onclick="javascript:test(\'spciallist\',3,3);"><a>普通封皮</a><a onclick="HideD(this)">x</a> </li>');
}

function B(dom) {
	$('.messpasge li').removeClass('active')
	$(dom).parent().parent().before('<li class="active" onclick="javascript:test(\'spciallist\',3,3);"><a>普通内页</a><a onclick="HideD(this)">x</a> </li>');
}

function C(dom) {
	$('.messpasge li').removeClass('active')
	$(dom).parent().parent().before('<li class="active" onclick="javascript:test(\'spciallist\',3,3);"><a>硫磺纸内页</a><a onclick="HideD(this)">x</a> </li>');
}