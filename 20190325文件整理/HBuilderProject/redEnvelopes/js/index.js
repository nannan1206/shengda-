//页面宽度自适应
function bodyScale() {
	var devicewidth = document.documentElement.clientWidth;
	var scale = devicewidth / 640;
	document.body.style.zoom = scale;
	document.body.style.display="block"
}
window.onload = window.onresize = function() {
		bodyScale();
	}
	//弹框的显示与隐藏
function Show(dom) {
	$(dom).show();
}

function Hide(dom) {
	$(dom).hide();
}

function Hideme(dom) {
	$(dom).hide();
	$(".noPass").show();
}
$(".rightNow").click(function() {
	$(".rightPass").hide();
	$(".noPass").show();
});
//控制输入框的自适应增长
function len(s) { //获取输入文本长度，字符占一位，汉字两位
	var l = 0;
	var a = s.split("");
	for (var i = 0; i < a.length; i++) {
		if (a[i].charCodeAt(0) < 299) {
			l++;
		} else {
			l += 2;
		}
	}
	return l;
}