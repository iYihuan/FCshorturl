$(document).ready(function () {
	ajaxshow('main.php');
});

function ajaxshow(page){
	$("#pgfrm").html('<div class="box box-shadow"><div class="box-container"><center><div id="taskloading" data-role="preloader" data-type="ring" data-style="color"></div><br>稍安勿躁数据正在来的路上~</center></div>');
	//ajax显示页面
	$.ajax({
    type: 'GET',
    url: page ,
    success:function(data) { 
    		$("#pgfrm").empty();
    		$("#pgfrm").html(data);
     },  
    error : function() {  
            $.Notify({
			    caption: '加载页面',
			    content: '由于通讯错误, 加载失败!',
			    shadow: true,
			    type: 'alert',
			    icon: "<span class='mif-cross'></span>"
			});
          showDialog('editnote');
    } 
	});
}
