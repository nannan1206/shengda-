//页面宽度自适应
function bodyScale() {
	var devicewidth = document.documentElement.clientWidth;
	var scale = devicewidth / 640;
	document.body.style.zoom = scale;
}
window.onload = window.onresize = function() {
		bodyScale();
	}
	//点击切换表单
$(document).ready(function() {
	$("button").click(function() {
		$("#div1").remove();
	});
	//表单的显示和隐藏搜索
	$(".qqStyLogin").hide();
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