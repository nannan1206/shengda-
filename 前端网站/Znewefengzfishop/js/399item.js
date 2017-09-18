(function($){
	$(function(){
		$('.item_show_list fieldset').each(function(i){
			$(this).click(function(){
				$('.item_show_list fieldset').removeClass('active').eq(i).addClass('active');
				$('.item_goods').removeClass('item_goods_active').eq(i).addClass('item_goods_active')
			})
		})
	})
})(jQuery)
