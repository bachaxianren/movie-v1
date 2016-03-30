$(function(){
	$(".del").click(function(){
		var id = $(this).data("id");
		var tr = $(this).parents("tr");
		$.ajax({
			type: "DELETE",
			url: "/admin/list?id="+id
		})
		.done(function(results){
			if(results.success===1){
				tr.remove();
			}
		})
	})
})