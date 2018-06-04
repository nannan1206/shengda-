$(function() {
		//默认地址选中状态
		$('.addadress').each(function(i) {
				$(this).click(function() {
					$('.addadress').removeClass('active').eq(i).addClass('active');
				})
			})
			//购物车弹框地址选择
		$('.okAdress').each(function(i) {
				$(this).click(function() {
					$('.okAdress').removeClass('active').eq(i).addClass('active');
				})
			})
			//订单页左侧栏目选中状态
		$('.newsList ul li').each(function(i) {
				$(this).click(function() {
					$('.newsList ul li').removeClass('active').eq(i).addClass('active');
				})
			})
			//选中未上传文件，tab对应
		$("#upFile").click(function() {
			$('.messClass li').removeClass('active');
			$("#noupFile").addClass('active');
		});
		//鼠标离开就隐藏
		$("#addspan").mouseleave(function() {
				$(".addspan").hide();
				$(".addspan").mouseleave(function() {
					$(this).hide();
				})
			})
			//登录界面验证码的点击颜色变化
		$('.imgNum').each(function(i) {
			$(this).click(function() {
				$('.imgNum').addClass('active');
			})
		})
	})
	//自定义弹框
function ddl_change() {
	var a = $("#ddl").find("option:selected").attr("value");
	//			alert(a);
	if (a == "99") {
		$(".inputArea").show();
	}
}
//显示隐藏新增地址表单
$(document).ready(function() {
	$("#addAreaDiv").hide();
	$(".addArea").click(function() {
		$("#addAreaDiv").toggle();
	});
});
/*立即报价弹出框显示隐藏*/
//订单详情弹框的显示与隐藏
function Show(dom) {
	$(dom).show();
}

function Hide(dom) {
	$(dom).hide();
}

function HideMade(dom) {
	$(dom).hide();
	$(".writeMes").show();
}

function ShowOrderP(dom) {
	$(dom).toggle();
}

function ShowOrder(dom) {
	$(dom).parent().next().toggle();
}

function sltAll(id, type) {
	var a = "#" + id;
	if (type) {
		$(a).click();
	} else {
		var select = $(a).attr("checked");
		var cks = $("#tbody1").find("input[type=checkbox]");
		if (select) {
			for (var i = 0; i < cks.length; i++) {
				$(cks[i]).attr("checked", select);
			}
		} else {
			for (var i = 0; i < cks.length; i++) {
				$(cks[i]).removeAttr("checked");
			}
		}
	}
}

//上传文件全选按钮的全选和反选
$(function() {
	//	$("#test1").next().addClass('active');
	var $tbCheckboxes = $("#j_tb").find(":checkbox");
	var $tbCheckboxes = $("#tbody1").find(":checkbox");
	// 全选和全不选
	$("#j_cbAll").click(function() {
		var isChecked = $(this).prop("checked");
		if (isChecked) {
			$tbCheckboxes.prop("checked", true);
		} else {
			$tbCheckboxes.prop("checked", false);
		}
	});
	// 单选控制全选checkbox选中或者不选中
	$tbCheckboxes.click(function() {
		var checkedLength = $("#j_tb").find(":checked").length;
		var allCheckboxLength = $tbCheckboxes.length;
		if (checkedLength == allCheckboxLength) {
			$("#j_cbAll").prop("checked", true);
		} else {
			$("#j_cbAll").prop("checked", false);
		}
	});
	// 单选控制全选checkbox选中或者不选中
	$tbCheckboxes.click(function() {
		var checkedLength = $("#tbody1").find(":checked").length;
		var allCheckboxLength = $tbCheckboxes.length;
		if (checkedLength == allCheckboxLength) {
			$("#sltAllInput").prop("checked", true);
		} else {
			$("#sltAllInput").prop("checked", false);
		}
	});
});
//登录界面改变checked的样式
//$(function() {
//		$("input[type='radio']").click(function() {
//			$("input[type='radio'][name='" + $(this).attr('name') + "']").parent().removeClass("checked")
//			$(this).parent().addClass("checked");
//		});
//		$("#phone").click(function() {
//			$('.phoneLogin').show();
//			$('.passLogin').hide();
//		});
//		$("#pass").click(function() {
//			$('.passLogin').show();
//			$('.phoneLogin').hide();
//		});
//
//	})
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
		$('.passLogin').show();
		$('.phoneLogin').hide();

	});
	$(".telLogin").click(function() {
		$(".telLogin").addClass("active");
		$(".qqLogin").removeClass("active");
		$('.phoneLogin').show();
		$('.passLogin').hide();
	});
});
//忘记密码修改步骤	
$(function() {
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
})