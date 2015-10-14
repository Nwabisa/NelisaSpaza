//Ajax Using Jquery

$(document).ready(function(){
//Products Search
$("#productSearch").keyup(function(){
	var searchVar = $("#productSearch").val();
	$.get("/products/search/" + searchVar, function(results){
		$("#productSearchResults").html(results);
		console.log(results);
	});
});	

//Category Search
$("#CategorySearch").keyup(function(){
	var searchVar = $("#CategorySearch").val();
	$.get("/showCat/search/" + searchVar, function(results){
		$("#categorySearchResults").html(results);
		console.log(results);
	});
});

//Sales Search
$("#saleSearch").keyup(function(){
	var searchVar = $("#saleSearch").val();
	$.get("/sales/search/" + searchVar, function(results){
		$("#SaleSearchResults").html(results);
		console.log(results);
	});
});
});
