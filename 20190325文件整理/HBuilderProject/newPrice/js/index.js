document.onreadystatechange = function () {
            if (document.readyState == "complete") {
                document.body.style.display = "block";
            } else {
                document.body.style.display = "none";
            };
        };	
//页面宽度自适应
var result = window.matchMedia('(min-width:1200px)');
var result2 = window.matchMedia('(min-width:992px)');
var result3 = window.matchMedia('(min-width:768px)');
if (result.matches) {
	console.log("大屏幕(>=1200)");
} else if (result2.matches) {
	console.log("中等屏幕(>=992&<=1200)");
} else if (result3.matches) {
	console.log("小屏幕(>=768&<=992)");
} else {

	function bodyScale() {
		var devicewidth = document.documentElement.clientWidth;
		var scale = devicewidth / 640;
		document.body.style.zoom = scale;	
	}
	window.onload = window.onresize = function() {
		bodyScale();
	}
	console.log("超小屏幕(<=768)");
}
$(window).resize(function() {
				console.log("窗体大小改变了！");
				location.reload(true);				
			});
	//点击切换表单
$(document).ready(function() {
	$("button").click(function() {
		$("#div1").remove();
	});
	//表单的显示和隐藏搜索
	$(".telARea").hide();
	$(".qqLogin").click(function() {
		$(".qqLogin").addClass("active");
		$(".telLogin").removeClass("active");
		$(".telARea").hide();
		$(".qqStyLogin").show();
	});
	$(".telLogin").click(function() {
		$(".telLogin").addClass("active");
		$(".qqLogin").removeClass("active");
		$(".qqStyLogin").hide();
		$(".telARea").show();
	});
    //点击发送验证码
    $(".imgNum").click(function() {
		$(".imgNum").addClass("active");
		});
});
	$(function() {
				$(".phone").click(function(event) {					
						var click_node = getEventTrigger(event);						
						var clickName = click_node.getAttribute("data-close");					
						var clickInput = click_node.nodeName;				
						if (clickName == 'pass1'|| clickName == 'pass2') {
							$("#" + clickName).val(null);
							$("#" + clickName).next().css("display", "none");
						}						
						if (clickInput == "INPUT") {							
							var next_closeId = click_node.id;							
							$("#" + next_closeId).bind("focus keyup", function() {							
								if ($("#" + next_closeId).val() != '') {
									$(".urog-regclose").css("display", "none");									
									$("#" + next_closeId).next().css("display", "inline-block");
								}
							})
						}
					})
					//得到点击事件的dom结构
				function getEventTrigger(event) {
					//ie 火狐 event兼容					
					event = event ? event : window.event　　
					var x = event.srcElement ? event.srcElement : event.target;
					return x;
				}
			})
