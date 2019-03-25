//页面宽度自适应
function bodyScale() {
	var devicewidth = document.documentElement.clientWidth;
	var scale = devicewidth / 640;
	document.body.style.zoom = scale;
	document.body.style.display = "block"
}
window.onload = window.onresize = function() {
		bodyScale();
	}
