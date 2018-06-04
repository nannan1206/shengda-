
$(function () {
   
    //保存留言
    $("#btnSave").click(function () {
        debugger;
        var messageType = $("#messClass li[class='active']").attr("num");//留言类型

        var detailDescription = $("#editor").val().trim();//详情描述

        var myRequest = $("#editor1").val().trim();//客户要求

        if (detailDescription == null || detailDescription == "") {
            layer.msg("详情描述不能为空!");
            return false;
        }
        else if (myRequest == null || myRequest == "") {
            layer.msg("客户要求不能为空!");
            return false;
        }

        else {
            abp.ui.setBusy(
                null,
                abp.ajax({
                    url: saveMessageUrl,
                    type: 'POST',
                    data: JSON.stringify({
                        messageType: messageType,
                        detailDescription: detailDescription,
                        myRequest, myRequest
                    })
                }).then(function (data) {
                    if (data == true) {     
                        
                        layer.msg("留言成功,请稍等 ！客服人员会尽快和你联系", function () {
                            window.location.href = "/";
                        });                                            
                    }
                    else {
                        layer.msg("留言失败");
                    }
                })
            );
        }
    });

})


//客户留言编辑文本框js
$(document).ready(function () {
    InitSimditor("editor");
    InitSimditor("editor1");
});


$(function () {


});

