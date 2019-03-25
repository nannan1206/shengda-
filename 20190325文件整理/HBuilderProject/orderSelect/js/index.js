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
//弹框的显示与隐藏
function Show(dom) {
	$(dom).show();
}

function Hide(dom) {
	$(dom).hide();
}
//点击切换表单
$(function() {
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
	//首页修改密码提示
	$(".addfixed").show();
	$(document).ready(function() {
		$(".iconclose").click(function() {
			$(".addfixed").fadeOut();
			$(".proSelect").css("top", "86px");
		});
	});
	//忘记密码修改步骤	
	$("#step1").show();
	$('.iphoneopen').click(function() {
		$("#step1").hide();
		$("#step2").show();
		$('.passButton').click(function() {
			$("#step2").hide();
			$("#step3").show();
			$('.passButton').click(function() {
				$("#step3").hide();
				$("#step4").show();
				$('.passButton').click(function() {
					$("#step4").hide();
					$("#step5").show();
				})
			})
		})
	})
	$('.mailopen').click(function() {
			$("#step1").hide();
			$("#step5").show();
			$('.passButton').click(function() {
				$("#step5").hide();
				$("#step3").show();
				$('.passButton').click(function() {
					$("#step3").hide();
					$("#step4").show();
					$('.passButton').click(function() {
						$("#step4").hide();
						$("#step5").show();
					})
				})
			})
		})
		//一键清空输入框
	$(".phone").click(function(event) {
		aa();
	})
	$(".addimgCss").click(function(event) {
		aa();
	})
	$(".phoneinput").click(function(event) {
		aa();
	})

	function getEventTrigger(event) {
		event = event ? event : window.event　　
		var x = event.srcElement ? event.srcElement : event.target;
		return x;
	}

	function aa() {
		var click_node = getEventTrigger(event);
		var clickName = click_node.getAttribute("data-close");
		var clickInput = click_node.nodeName;
		if (clickName == 'pass1' || clickName == 'pass2' || clickName == 'pass3' || clickName == 'pass4' || clickName == 'pass5' || clickName == 'pass6' || clickName == 'pass7' || clickName == 'pass8' || clickName == 'pass9' || clickName == 'pass10' || clickName == 'pass11' || clickName == 'pass12' || clickName == 'pass13' || clickName == 'pass14') {
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
	}

})
