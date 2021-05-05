$(function(){
	$(".rate .item").click(function() {
	$('#plan-select-form [name="plan"]').val(3 - $(this).index());
	$(".rate .item").removeClass("item--green").eq($(this).index()).addClass("item--green");
}).eq(0).addClass("active");
});