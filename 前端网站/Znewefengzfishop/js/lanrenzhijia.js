$(document).ready(function (){
	
	//点击小图切换大图
//	$("#thumbnail li a").click(function(){
//		$(".zoompic img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
//		$("#thumbnail li.current").removeClass("current");
//		$(this).parents("li").addClass("current");
//		return false;
//	});
//	$(".zoompic>img").load(function(){
//		$(".zoompic>img:hidden").show();
//	});

//	放大效果
	$(function(){
		bigger();
		$('.sliderbox .slider li').each(function(i){
			$(this).click(function(){
				$('.sliderbox .slider li').removeClass('active').eq(i).addClass('active');
				$('.zoompic>img').attr('src','img/main/0'+(i+1)+'.jpg');
				$('.detail_bigpic>img').attr('src','img/main/0'+(i+1)+'.jpg');
				bigger();
				return false;
			})
		})
		function bigger(){
			var scrollL=document.documentElement.scrollLeft||document.body.scrollLeft,
				scrollT=document.documentElement.scrollTop||document.body.scrollTop;
			$(window).scroll(function(){
				scrollL=$(document).scrollLeft();
				scrollT=$(document).scrollTop();
			})
			$('.zoompic').mousemove(function(ev){
				$('.detail_float').show();
				$('.detail_bigpic').show();
				var fl=$('.detail_float'),
					small=$('.zoompic'),
					big=$('.detail_bigpic'),
					sImg=$('.zoompic>img'),
					bImg=$('.detail_bigpic>img');
				var sW=sImg.width(),
					sH=sImg.height(),
				    bW=big.width(),
				    bH=big.height(),
				    fW=fl.width(),
				    fH=fl.height(),
				    bImgW=bImg.width(),
				    bImgH=bImg.height();
				var e=event||ev;
				var flLeft=e.clientX-small.offset().left-fW/2+scrollL;
				var flTop=e.clientY-small.offset().top-fH/2+scrollT;
				if(flLeft<=0){
					flLeft=0;
				}else if(flLeft>=sW-fW){
					flLeft=sW-fW;
				}
				if(flTop<=0){
					flTop=0;
				}else if(flTop>=sH-fH){
					flTop=sH-fH;
				}
				fl.css('left',flLeft);
				fl.css('top',flTop);
				var bImgL=flLeft/(sW-fW)*(bImgW-bW);
				var bImgT=flTop/(sH-fH)*(bImgH-bH);
				bImg.css('left',-bImgL);
				bImg.css('top',-bImgT);
			}).mouseout(function(){
				$('.detail_float').hide();
				$('.detail_bigpic').hide();

			})
		}
	})
	
});