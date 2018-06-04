
//初始化Simditor 使用时请传入 textarea 对应的 editorId
function InitSimditor(editorId) {

    toolbar = [ 'bold', 'italic', 'underline', 'strikethrough',
         '|', 'ol', 'ul', '|', 'link', 'image', 'hr'];

    var editor = new Simditor({
        textarea: $('#' + editorId),
        placeholder: '这里输入内容...',
        toolbar: toolbar,  //工具栏
        defaultImage: 'simditor/images/image.png', //编辑器插入图片时使用的默认图片
        upload: {
            // url: "Simditor/Upload", //文件上传的接口地址(自定义)
            url: "Home/Upload",
            //params: null, //键值对,指定文件上传接口的额外参数,上传的时候随文件一起提交
            //fileKey: 'fileDataFileName', //服务器端获取文件数据的参数名
            //connectionCount: 3,
            //leaveConfirm: '正在上传文件'
        }
    });
}