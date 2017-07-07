//多选框的选中
function setParmsValue(parm, parmsValue) {}
$(function() {
	var spans = $(".serChock li").click(function() {
	        if($(this).hasClass("active")){
			   $(this).removeClass("active");
			}
			else{
			   $(this).addClass("active");
			}
			//$(this).siblings().removeClass("active");		
		}
	);
});