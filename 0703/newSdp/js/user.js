//顶级栏目的显示与隐藏
$(document).ready(function() {
	$(".hard").hide();
	$(".na00").hover(function() {
		$(".hard").slideToggle(300);
	});
});

//下单页面 产品中心的显示与隐藏
$(document).ready(function() {
	$(".hard1").hide();
	$(".orderhide").hover(function() {
		$(".hard1").slideToggle(100);
	});
});
//下单页面栏目选中与赋值
function setParmsValue(parm, parmsValue) {}
$(function() {
	var spans = $(".addstyle dd").click(function() {
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			if ($(this).parent().attr("id") == "key5") {
				$("#txtZhang").val($(this).html());
			}
			if ($(this).parent().attr("id") == "key3") {
							var chiList = $(this).html().split('*');
							$("#chiLeft").val(chiList[0]);
							$("#chiRight").val(chiList[1]);
//				$("#sizestyle").val($(this).html());
			}
			//选中参数显示
			if ($(this).parent().attr("id") == "key1") {

				$("#material").html("材质：" + $(this).html());
			}
			if ($(this).parent().attr("id") == "key2") {
				$("#shape").html("形状：" + $(this).html());
			}
			if ($(this).parent().attr("id") == "key3") {
				$("#size").html("尺寸：" + $(this).html() + "mm");
			}	
			
			
			if ($(this).parent().attr("id") == "key4") {
				$("#material1").html("后工：" + $(this).html());
			}
			if ($(this).parent().attr("id") == "key5") {
				$("#num").html("张数：" + $(this).html() + "张");
			}
			
			// 张数变  价格变化
			if ($(this).parent().attr("id") == "key5") {
				$("#price").html("￥ "+ $(this).html());
			}
			
		}

	);
});

function GetHtml() {
	$("#num").html("张数：" + $("#txtZhang").val() + "张");
	$("#key5 dd").each(function(index,element){
			$(element).removeClass("active");
	});
	//价格变
	$("#price").html("￥"+ $("#txtZhang").val());
	//获取尺寸的输入数组
	$("#size").html("尺寸："+$("#chiLeft").val()+"*"+$("#chiRight").val()+"mm");
	$("#key3 dd").each(function(index,element){
			$(element).removeClass("active");
	});
	
}


//select onchange事件
function GetStyle() {
	var checkValue = $("#sizeStyle").val();
	var province = $("#s_province").val();
	var city = $("#s_city").val();
	var county = $("#s_county").val();	
	$("#size").html("尺寸：" + checkValue + "mm");
	document.getElementById("where").value = province + city +county;
	
	
	
	
	$("#key3 dd").each(function(index,element){
			$(element).removeClass("active");
	});
}

//用户中心页面，图片上传
function setImagePreview() {
	document.getElementById('textfield').value=this.value;
    var docObj=document.getElementById("fileupload");  
    var imgObjPreview=document.getElementById("userpic");  
    if(docObj.files && docObj.files[0]){  
        //火狐下，直接设img属性  
        imgObjPreview.style.display = 'block';  
        imgObjPreview.style.width = '60px';  
        imgObjPreview.style.height = '60px';                      
        //imgObjPreview.src = docObj.files[0].getAsDataURL();  
          
        //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式    
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);  
    }else{  
        //IE下，使用滤镜  
        fileuploadObj.select();  
        var imgSrc = document.selection.createRange().text;  
        var localImagId = document.getElementById("localImag");  
        //必须设置初始大小  
        localImagId.style.borderRadius = "60px";
//      localImagId.style.height = "300px";  
        //图片异常的捕捉，防止用户修改后缀来伪造图片  
        try{  
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";  
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;  
        }catch(e){  
            alert("您上传的图片格式不正确，请重新选择!");  
            return false;  
        }  
        imgObjPreview.style.display = 'none';  
        document.selection.empty();  
    }  
    return true;  
}  

function setValue()
{
	document.getElementById('textfield').value=document.getElementById('fileupload').value;
}




//下单页面选择地址弹框
   /*默认地址切换*/
  $(function(){
  	$('.thead-tbl-address').each(function(i){
				$(this).click(function(){
					$('.thead-tbl-address').removeClass('active').eq(i).addClass('active');
				})
			})

  })
			


	function Show()
	{
		/*修改地址弹出框显示隐藏*/
			$('.modify_address').show();		  
	}
	
	function Hide()
	{
		$('.modify_address').hide();
	}
    function ShowLayer()
	{
		/*支付弹出框显示隐藏*/
			$('.changepay').show();		  
	}
   function Hidelayer()
	{
		$('.changepay').hide();
	}
	function ShowMap()
	{
		/*地图定位地址弹出框显示隐藏*/
			$('.changeMap').show();		  
	}
	
	function HideMap()
	{
		$('.changeMap').hide();
	}

//最终下单预览页面js
$(function(){
  	$('.addd').each(function(i){
				$(this).click(function(){
					$('.addd').removeClass('clockspan').eq(i).addClass('clockspan');
				})
			})

  })
//售后服务选中状态
$(function(){
  	$('#cServer li').each(function(i){
				$(this).click(function(){
					$('#cServer li').removeClass('active').eq(i).addClass('active');
				})
			})

  })


$(function(){
  	$('.soldthing').each(function(i){
				$(this).click(function(){
					$('.soldthing').removeClass('active').eq(i).addClass('active');
				})
			})

  })



//下单页面全选按钮的选中

function selectAll(name, item) {
	var ischeck = $(item).attr('checked');
	var el = document.getElementsByName(name);
	for(var i = 0; i < el.length; i++) {
		if(el[i].type == "checkbox" && el[i].name == name) {
			if(ischeck) {
				el[i].checked = true;
			} else {
				el[i].checked = false;
			}
		}
	}
}
//地址三级联动样式
//var Gid  = document.getElementById ;
//var showArea = function(){
//	Gid('show').innerHTML = "<h3>省" + Gid('s_province').value + " - 市" + 	
//	Gid('s_city').value + " - 县/区" + 
//	Gid('s_county').value + "</h3>"
//							}
//Gid('s_county').setAttribute('onchange','showArea()');




















//暂时没有用到下面板块
function upHead() {
	if (!$("#textfield").val()) {
		alert("请选择上传图片");
//		layer.msg("请选择上传图片");
		return false;
	}
	document.getElementById("formimg").submit();
}

function openSlt() {
	layer.open({
		type: 1,
		title: "选择头像",
		content: $("#divhead"),
		area: ['700px', '600px']
	})
}

function savePic() {
	if (!$("#textfield").val()) {
		MyDialog.tips("请先上传图片");
		return false;
	}
	$("#ws").val(parseInt($(".jcrop_w img").css("width").replace('px')));
	$("#hs").val(parseInt($(".jcrop_w img").css("height").replace('px')));
	$("#t").val(parseInt($(".jcrop_w img").css("top").replace('px')));
	$("#l").val(parseInt($(".jcrop_w img").css("left").replace('px')));
	$.post("/usercenter/savePic/", $("#form2").serialize(), function(result) {
		if (result.title) {
			parent.layer.msg("保存成功", function() {
				parent.$("#userpic").attr("src", result.message);
				parent.$("#headimg").val(result.message);
				parent.layer.closeAll();
			})
		} else {
			parent.layer.msg(result.message);
		}
	})
}

function upInfo() {
	$.post("/usercenter/upinfo/", $("#form1").serialize(), function(result) {
		if (result.title) {
			layer.msg("修改成功");
		} else {
			layer.msg(result.message)
		}
	})
}

//修改密码

function upPassword() {
	var pwd = $("input[type='password']");
	if (!$(pwd[0]).val()) {
		layer.msg("旧密码不能为空");
		return false;
	}
	if (!$(pwd[1]).val()) {
		layer.msg("新密码不能为空");
		return false;
	}
	if (!$(pwd[2]).val()) {
		layer.msg("确认新密码不能为空");
		return false;
	}
	if ($(pwd[2]).val() != $(pwd[2]).val()) {
		layer.msg("两次新密码不一致");
		return false;
	}
	$.post("/usercenter/uppassword", $("#form3").serialize(), function(result) {
		if (result.title) {
			layer.msg("修改成功");
		} else {
			layer.msg(result.message)
		}
	})
}