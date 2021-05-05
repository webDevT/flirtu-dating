$(function(){
	$(".rate .item").click(function() {
	$(".rate .item").removeClass("item--green").eq($(this).index()).addClass("item--green");
}).eq(0).addClass("active");

});