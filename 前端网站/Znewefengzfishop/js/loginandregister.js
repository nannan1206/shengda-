//登录
//	账户登录与微信登录切换
$(function(){
		$('.formbody').hide();	
			$('.formtop .Accountlogin').click(function(){
				$('.wechat').removeClass('active');
				$('.formtop .Accountlogin').addClass('active');
				$('.formbody').hide();
				$('.formbody1').show();
				
			})
			$('.formtop .wechat').click(function(){
				
				$('.Accountlogin').removeClass('active');
				$('.formtop .wechat').addClass('active');
				$('.formbody').show();
				$('.formbody1').hide();
			})
			
	//			账户登录与微信登录切换
							$('.businessform').hide();
							$('.formtop .Accountlogin').click(function() {
								$('.wechat').removeClass('active');
								$('.formtop .Accountlogin').addClass('active');
								$('.personform').show();
								$('.businessform').hide();
							})
							$('.formtop .wechat').click(function() {
								$('.Accountlogin').removeClass('active');
								$('.formtop .wechat').addClass('active');
								$('.personform').hide();
								$('.businessform').show();
							})
							//个人用户和设计师切换
							
})
		