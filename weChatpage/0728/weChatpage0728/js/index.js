//页面宽度自适应
function bodyScale(){
			var devicewidth=document.documentElement.clientWidth;
			var scale=devicewidth/640;
			document.body.style.zoom=scale;
		}
		window.onload=window.onresize=function(){
			bodyScale();
		}
//点击勾选记住密码
$(document).ready(function(){
  $(".show").click(function(){
    $("#rig").toggle();
  });
});