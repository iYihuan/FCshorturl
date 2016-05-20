$(document).ready(function () {
  	$("#navi li:not([class='title'])").attr("class","");
	$('#main').attr("class","stick active bg-red");
});

function geturl() {
	
		var url=document.getElementById("url").value;
		if(url==""){
			$.Notify({
		    caption: '错误',
		    content: '没有输入网址你叫我转什么qwq',
		    shadow: true,
		    type: 'alert',
		    icon: "<span class='mif-cross'></span>"
		});
			return false;
		}
		var reurl=document.getElementById("reurl").value;
		if(reurl==""){
			$.Notify({
		    caption: '错误',
		    content: '没有输入你叫我转什么qwq',
		    shadow: true,
		    type: 'alert',
		    icon: "<span class='mif-cross'></span>"
		});
			return false;
		}
	$.ajax({
    type: 'POST',
    url: "reurl.php" ,
    dataType: 'json',
    data:{  
		url : $("#url").val(),
		reurl : $("#reurl").val(),
    },
    success:function(data) { 
    	if(data['success'])
    	{
    		$.Notify({
			    caption: '成功',
			    content: '恭喜~该链接可以使用了',
			    shadow: true,
			    type: 'success',
			    icon: "<span class='mif-checkmark'></span>"
			});
			var reurl = $("#reurl").val();
               $("#surl").html("您的短链接:https://url.mcpe.cc/"+reurl);
    	}
		if(data['error1'])
    	{
    		$.Notify({
			    caption: '错误',
			    content: '当前短链接已存在~!',
			    shadow: true,
			    type: 'alert',
			    icon: "<span class='mif-cross'></span>"
			});
    	}
    	if(data['error'])
    	{
            $.Notify({
			    caption: '错误',
			    content: '出现了未知故障~!',
			    shadow: true,
			    type: 'alert',
			    icon: "<span class='mif-cross'></span>"
			});
    	}
    },  
    error : function() {  
        $.Notify({
		    caption: '错误',
		    content: '出现了未知故障~!',
		    shadow: true,
		    type: 'alert',
		    icon: "<span class='mif-cross'></span>"
		});
    } 
	});
}