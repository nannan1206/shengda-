(function($){
	$(function(){
		$('.detail_choose li').each(function(i){
			$(this).click(function(){
				if(i==0||$('.detail_choose li span').eq(i-1).html()!='请选择'){
					$('.detail_choose li').removeClass('detail_choose_style').eq(i).addClass('detail_choose_style');
					$('.detail_choose li').eq(i).addClass('detail_choose_active');
					$('.detail_address').removeClass('detail_add').eq(i).addClass('detail_add');
					$('.detail_choose span').eq(i).html("请选择");
					if(i==0){
						$('.detail_choose li').removeClass('detail_choose_active').eq(i).addClass('detail_choose_active');
					}else if(i==1){
						$('.detail_choose li').eq(2).removeClass('detail_choose_active');
					}
					
				}
			})
		})
		$('.detail_top').click(function(){
			$(this).addClass('clikdetail_choose_style');
			$('.detail_content').show();
			$.ajax({
				type:"get",
				url:"js/cityData.min.json",
				success:function(data){
					$('.detail_province ul').html('');
					$.each(data, function(i) {
						$('.detail_province ul').append('<li><span>'+data[i].n+'</span></li>');
					});
					/*选择省*/
					$('.detail_province ul li').each(function(j){
						$(this).click(function(){
							$('.dis_address').html(data[j].n);
							$('.detail_choose span').eq(0).html(data[j].n);
							$('.detail_address').removeClass('detail_add').eq(1).addClass('detail_add');
							$('.detail_choose li').eq(1).addClass('detail_choose_active');
							$('.detail_choose li').removeClass('detail_choose_style').eq(1).addClass('detail_choose_style');
							$('.detail_choose span').eq(1).html("请选择");
							$('.detail_city ul').html('');
							$.each(data[j].s,function(k){
								$('.detail_city ul').append('<li><span>'+data[j].s[k].n+'</span></li>');
							})
							/*选择市*/
							$('.detail_city ul li').each(function(x){
								$(this).click(function(){
									var shengshi='';
									if(data[j].n==data[j].s[x].n){
										shengshi=data[j].n;
									}else{
										shengshi=data[j].n+data[j].s[x].n;
									}
									$('.dis_address').html(shengshi);
									$('.detail_choose span').eq(1).html(data[j].s[x].n);
									
									$('.detail_area ul').html('');
									if(data[j].s[x].s!=undefined){
										$('.detail_address').removeClass('detail_add').eq(2).addClass('detail_add');
										$('.detail_choose li').eq(2).addClass('detail_choose_active');
										$('.detail_choose li').removeClass('detail_choose_style').eq(2).addClass('detail_choose_style');
										$('.detail_choose span').eq(2).html("请选择");
										/*选择区*/
										$.each(data[j].s[x].s,function(y){
											$('.detail_area ul').append('<li><span>'+data[j].s[x].s[y].n+'</span></li>');
										})
										$('.detail_area ul li').each(function(z){
											$(this).click(function(){
												$('.detail_choose span').eq(2).html(data[j].s[x].s[z].n);
												$('.dis_address').html(shengshi+data[j].s[x].s[z].n);
												$('.detail_content').hide();
												$('.detail_top').removeClass("clikdetail_choose_style");
											})
										})
									}else{
										$('.detail_content').hide();
										$('.detail_top').removeClass("clikdetail_choose_style");
									}
								})
								
							})
							
						})
					})
					
				}
			});
		})
		$('.detail_close').click(function(){
			$('.detail_content').hide();
			$('.detail_top').removeClass("clikdetail_choose_style");
		})
		
	})
})(jQuery)
