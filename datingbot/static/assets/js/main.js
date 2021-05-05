function localStorageTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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
	setCookie('__cp', "yes");
	localStorage.setItem('__cp', "yes");
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

if (localStorageTest() && localStorage.getItem('__cp')) {
	$('.cookis-modal').hide();
} else if (navigator.cookieEnabled && getCookie('__cp')) {
    $('.cookis-modal').hide();
}

});