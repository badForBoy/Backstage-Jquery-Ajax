$(document).ready(function(){
	$("#search").click(function(){
		$.ajax({
			type: "GET",
			url: "service.php?number="+$("keyword").val(),
			dataType: "json",
			success: function(data){
				if (data.success) {
					$("#searchResult").html(data.msg);
				}
				else {
					$("#searchResult").html("出现错误：" + data.msg);
				}
			},
			error:function(jqXHR){
				console.log("发生错误："+jqXHR.status);
			}
		});
	});


	$("#save").click(function(){
		$.ajax({
			type: "POST",
			url: "service.php",
			dataType: "json",
			data: {
				name:$("#staffName").val(),
				number:$("#staffnumber").val(),
				sex:$("#staffsex").val(),
				job:$("#staffjob").val(),
			}
			success: function(data){
				if (data.success) {
					$("createResult").html(data.msg);
				}
				else {
					$("createResult").html("出现错误：" + data.msg);
				}
			},
			error:function(jqXHR){
				console.log("发生错误："+jqXHR.status);
			}
		});
	});
	
});