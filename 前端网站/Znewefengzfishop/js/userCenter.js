(function($){
	$(function(){
//		下拉二级菜单
		$('.person_center_menu dl dt').each(function(i){
			$(this).click(function(){
				$(this).nextAll('dd').stop(true).toggle(200,function(){
					$('.person_center_menu dl').eq(i).addClass('active');
				});
				$(this).children('.iconfont').toggle();
			})
		})
		$('.person_center_menu dl dd').each(function(i){
			$(this).click(function(){
				$('.person_center_menu dl dd').removeClass('active').eq(i).addClass('active');
			})
		})
//		上传头像
		$('.changePic').on('change',function(e){
			var tar = this,
				files = tar.files,
				fNum = files.length,
				URL = window.URL || window.webkitURL;
			if(!files[0])return;
			for(var i=0;i<fNum;i++){
				if(files[i].type.search(/image/)>=0){
					var blob = URL.createObjectURL(files[i]);
		
					var newImg = new Image();
					newImg.onload = function(){
						$('.basic_info_headpic').html($(newImg));
						$('.basic_info_headpic').each(function(i){
							$(this).children('img').css({
								width:$('.basic_info_headpic').eq(i).width(),
								height:$('.basic_info_headpic').eq(i).height()
							})
						})
					};
					newImg.src = blob;
				}
			}
		});
/*****************************账户安全页面***************************/
		//修改密码--判断密码强弱
		$('.account_security_pass_new').on('input propertychange',function(e){
			var pass=$(this).val();
			var index = checkStrong(pass);
	        var len=pass.length;
			if (index==0) { 
				$('.pw_level').removeClass('active'); 
			}else if (index==3&&len>=8) { 
				$('.pw_level').eq(0).addClass('active');
				$('.pw_level').eq(1).addClass('active'); 
				$('.pw_level').eq(2).addClass('active'); 
				 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
			}else if (index==2&&len>=6) { 
				$('.pw_level').removeClass('active'); 
				$('.pw_level').eq(0).addClass('active');
				$('.pw_level').eq(1).addClass('active'); 
				 //密码为六位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
			}else { 
				$('.pw_level').removeClass('active'); 
				$('.pw_level').eq(0).addClass('active'); 
				
			} 
			return true;
		})
		//////////////////////////////////////////////////////////////////////
		//密码检测密码强度
		//////////////////////////////////////////////////////////////////////
		function checkStrong(sValue) {
		    var modes = 0;
		    //正则表达式验证符合要求的
		    if (sValue.length <1) return modes;
		    if (/\d/.test(sValue)) modes++; //数字
		    if (/[a-zA-Z]/.test(sValue)) modes++; //字母
		    if (/\W/.test(sValue)) modes++; //特殊字符
		   //逻辑处理
		    switch (modes) {
		        case 1:
		            return 1;
		            break;
		        case 2:
		            return 2;
		        case 3:
		            return 3;
		            break;
		    }
		}
//		手机验证
		$('.identify_top button').each(function(i){
			$(this).click(function(){
				$('.identify_detail').eq(i).toggle(300);
				$('.identify_sub1').each(function(){
					$(this).click(function(){
						$(this).parent('form').removeClass('active');
						$(this).parent('form').next('form').addClass('active');
						$('.identify_menu').eq(i).children('dl').children('dt').removeClass('active').eq(1).addClass('active');
						return false;
					})
				})
				$('.identify_sub2').each(function(){
					$(this).click(function(){
						if($(this).parent('form').next('form').length!=0){
							$(this).parent('form').removeClass('active');
							$(this).parent('form').next('form').addClass('active');
						}else{
							if(i==0||i==1){
								$('.account_security_mask').show();
								$('.account_security_succ div').removeClass('active').eq(0).addClass('active');
							}else{
								$('.account_security_mask').show();
								$('.account_security_succ div').removeClass('active').eq(1).addClass('active');
							}
						}
						$('.identify_menu').eq(i).children('dl').children('dt').removeClass('active').eq(2).addClass('active');
						return false;
					})
				})
			})
			
		})
//		弹窗隐藏
		$('.account_security_succ button').click(function(){
			$('.account_security_mask').hide();
		})
		
//		上传身份证正反面
		$('.card_identify input').on('change',function(e){
			var tar = this,
				files = tar.files,
				fNum = files.length,
				URL = window.URL || window.webkitURL;
			if(!files[0])return;
			for(var i=0;i<fNum;i++){
				if(files[i].type.search(/image/)>=0){
					var blob = URL.createObjectURL(files[i]);
					var _this=this;
					var newImg = new Image();
					newImg.onload = function(){
						$(_this).parent('dd').children('div').html($(newImg));
						$(_this).parent('dd').children('div').children('img').css({
							width:$(this).parent('div').width(),
							height:$(this).parent('div').height()
						});
					};
					newImg.src = blob;
				}
			}
		});
		/*****************************收货地址页面***************************/
//		收货地址操作鼠标滑过
		$('tbody tr').eq(0).children('td').children('b').addClass('active');
		$('tbody tr td').last().children().hide();
		$('tbody tr').each(function(i){
			if(i!=0){
				$(this).children('td').last().mouseover(function(){
					$(this).children().show();
				}).mouseout(function(){
					$(this).children().hide();
				});
			}
			//		收货地址操作----修改
			$(this).children('td').last().children('span').first().click(function(){
				$('.receive_manage div').removeClass('active').eq(1).addClass('active');
			})
			//		收货地址操作----删除
			$(this).children('td').last().children('span').eq(1).click(function(){
				$('.receive_address_mask').show();
				$('.receive_address_modify div').removeClass('active').eq(1).addClass('active');
				$('.receive_address_modify button').eq(1).click(function(){
					$('tbody tr').eq(i).hide();
				})
			})
			
			
		})
		//增加地址
		$('.add_address').click(function(){
			$('.receive_manage div').removeClass('active').eq(1).addClass('active');
		})
		//保存地址
		$('.receive_address_add li button').click(function(){
			$('.receive_address_mask').show();
			$('.receive_address_modify div').removeClass('active').eq(0).addClass('active');
		})
		//点击弹窗中确定按钮，弹窗消失
		$('.receive_address_modify button').click(function(){
			$('.receive_address_mask').hide();
			$('.receive_manage div').removeClass('active').eq(0).addClass('active');
		})
		
	})

		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery)
