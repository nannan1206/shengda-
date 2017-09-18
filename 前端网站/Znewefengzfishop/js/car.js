(function($){
	$(function(){
//		全选
		function selectAll(){
			$('.caritem input[type="checkbox"]').attr('checked','checked');
			$('.caritem1').addClass('active');
		}
//		全不选
		function selectNone(){
			$('.caritem input[type="checkbox"]').removeAttr('checked');
			$('.caritem1').removeClass('active');
		}
//		判断当前商品是否被选中
		function judgecaritem1(str){
			var bTag=true;
			var name='.'+str+' .caritem1 input[type="checkbox"]';
			var len=$(name).length;  
			$(name).each(function(i){
				if($(name).eq(i).attr('checked')=='checked'){
					$(this).parent().parent().addClass('active');
				}else{
					bTag=false;
					$(this).parent().parent().removeClass('active');
				}
				if((i==len-1)&&bTag){
					$('.'+str+' .caraddorder input').attr('checked','checked');
				}
			})
		}
//		判断399套餐和单品头部是否都被选中,若是,则全选自动选中
		function judgecaraddorder(){
			if($('.single_wrap .caraddorder input').attr('checked')=='checked'&&$('.pack_wrap .caraddorder input').attr('checked')=='checked'){
				$('.all_selsect input').attr('checked','checked');
			}
		}
		//	全选
		$('.all_selsect input').click(function(){
			if($(this).attr('checked')=='checked'){
				selectAll();
			}else{
				selectNone();
			}
			judgecaritem1('caritem');
		})
//		整装套餐/单品 全选
		$('.single_wrap .caraddorder input').click(function(){
			if($(this).attr('checked')=='checked'){
				$('.single_wrap input[type="checkbox"]').attr('checked','checked');
				judgecaraddorder();
			}else{
				$('.single_wrap input[type="checkbox"]').removeAttr('checked');
				$('.all_selsect input').removeAttr('checked');
			}
			judgecaritem1('single_wrap');
		})
//		399套餐 全选
		$('.pack_wrap .caraddorder input').click(function(){
			if($(this).attr('checked')=='checked'){
				$('.pack_wrap input[type="checkbox"]').attr('checked','checked');
				judgecaraddorder();
			}else{
				$('.pack_wrap input[type="checkbox"]').removeAttr('checked');
				$('.all_selsect input').removeAttr('checked');
			}
			judgecaritem1('pack_wrap');
		})	
//		单个产品
		$('.caritem1 input[type="checkbox"]').each(function(i){
			$(this).click(function(){
				if($(this).attr('checked')=='checked'){
					
				}else{
					$(this).parent().parent().parent().children('.caraddorder').children('input').removeAttr('checked');
					$('.all_selsect input').removeAttr('checked');
				}
				var parent=$(this).parent().parent().parent().attr('class');
				judgecaritem1(parent);
			})
			
		})
		
		//商品详情页按钮加减
//		var stock=parseInt($('.stock').text());
		$('.addDel_add').each(function(i){
			$(this).click(function(){
				var num=parseInt($('.addDel input').eq(i).val());
				$('.addDel input').eq(i).val(++num);
				$(this).css("cursor","pointer");
				$('.addDel_del').eq(i).css("cursor","pointer");
			})
		})
		$('.addDel_del').each(function(i){
			$(this).click(function(){
				var num=parseInt($('.addDel input').eq(i).val());
				if(num<=1){
					$('.addDel input').eq(i).val(1);
					$(this).css("cursor","not-allowed");
					$('.addDel_add').eq(i).css("cursor","pointer");
				}else{
					$('.addDel input').eq(i).val(--num);
					$(this).css("cursor","pointer");
					$('.addDel_del').eq(i).css("cursor","pointer");
				}
			})
		})
	})
})(jQuery)
