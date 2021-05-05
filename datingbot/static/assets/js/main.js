$(function(){

$('.cookis__setting').click(function(){
	$(this).toggleClass('active');
	$('.cookis__setting-content').toggleClass('active');
})

$('.cookis__setting-button').click(function(){
	$('.cookis__setting-content').removeClass('active');
	$('.cookis__setting').removeClass('active');
})

$('.cookis__setting-close').click(function(){
	$('.cookis__setting').removeClass('active');
	$('.cookis__setting-content').removeClass('active');
})

$('.accept__cookis').click(function(){
	$('.cookis-modal').fadeOut();
})

$('.cooking-setting-footer').click(function(){
	$('.cookis-setting-modal').fadeIn();
})

$('.cookis-setting-modal .cookis__setting-close').click(function(){
	$('.cookis-setting-modal').fadeOut();
})
$('.cookis-setting-modal .cookis__setting-button').click(function(){
	$('.cookis-setting-modal').fadeOut();
})

// ------start sticky header------

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('.top-header').addClass("sticky");
}
else{
$('.top-header').removeClass("sticky");
}
});


$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('active');
})

$('.sub-menu-link').click(function(){
	$('.sub-menu-content').toggleClass('active');
})
//-------end sticky header--------





});