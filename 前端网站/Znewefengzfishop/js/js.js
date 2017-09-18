$(function(){
	// 蜂智首页浮动框显示隐藏
	$('.QR_Code  QR_button').click(function() {
		$('.QR_Code').hide();
	});
	//商品详情页按钮加减
	var stock=parseInt($('.stock').text());
	$('.num .addDel_add').click(function(){
		var num=parseInt($('.num .addDel input').val());
		if(num>=stock){
			$('.num .addDel input').val(num);
			$(this).css("cursor","not-allowed");
			$('.num .addDel_del').css("cursor","pointer");
		}else{
			$('.num .addDel input').val(++num);
			$(this).css("cursor","pointer");
			$('.num .addDel_del').css("cursor","pointer");
		}
	})
	$('.num .addDel_del').click(function(){
		var num=parseInt($('.num .addDel input').val());
		if(num<=1){
			$('.num .addDel input').val(1);
			$(this).css("cursor","not-allowed");
			$('.num .addDel_add').css("cursor","pointer");
		}else{
			$('.num .addDel input').val(--num);
			$(this).css("cursor","pointer");
			$('.num .addDel_del').css("cursor","pointer");
		}
	})
	
//	详情页容量选择
	$('.dl2 .dt2').each(function(i){
		$(this).click(function(){
			$('.dl2 .dt2 a').removeClass("active").eq(i).addClass('active');
		})
	})
//	详情页颜色分类
	$('.d12 .dt31').each(function(i){
		$(this).click(function(){
			$('.d12 .dt31 a').removeClass("active").eq(i).addClass('active');
		})
	})
	
//	评论赞/回复的显示隐藏
	$('.personitem').each(function(i){
		$(this).mouseover(function(){
			$('.personitem .aandd').eq(i).show();
		}).mouseout(function(){
			$('.personitem .aandd').eq(i).hide();
		})
	})
	
})
