$(function(){
	$(document).ready(function(){
		$('.user-profile').after('<div class="trans-info"></div>');
		$('.story-highlights').after('<div class="trans-subs"></div>');
		if ($(window).width() < 585){
			$('.main-subs').appendTo('.trans-subs');
			$('.main-info').appendTo('.trans-info');
		}
		else {
			$('.main-subs').appendTo('.content-block__information');
			$('.main-info').appendTo('.content-block__information');
		}
	});

	$(window).on('scroll touchmove', function () {
		if ($(document).scrollTop() != 0){ 
			$('.fixed-header__header-content').css({'margin':'10px 20px'});
			$('.line-draw').css({'visibility':'hidden'});
			$('.content-block__logo').css({'visibility':'hidden'});

		}
		else{
			$('.fixed-header__header-content').css({'margin':'20px 20px'});
			$('.line-draw').css({'visibility':'visible'});
			$('.content-block__logo').css({'visibility':'visible'});
		}
	});

	userText = false;
	
	$('.reset-button').on('mousedown', function () {
		$('.input').val('');
		$('.input').attr('placeholder', 'Поиск');
		userText = false;
	});
	$('.input').on('keypress', function () {
		if ($('.input').val().length >= 1){
			$('.input').attr('placeholder', 'Поиск');
			userText = false;
		}
	});

	$('.input').on('focus', function () {
		$('.input').css({'background-image':'none'});
		$('.input-button').css({'visibility':'visible'});
		$('.input').addClass('placeholder-text-left');
		if (userText == true){
			$('.input').val($('.input').attr('placeholder'));
		}
	});

	$('.input').on('blur', function () {
		$('.input-button').css({'visibility':'collapse'});
		$('.input').css({'background-image':'url(images/h-search.png)'});
		if($('.input').val().length != 0){
			$('.input').attr('placeholder', $("input").val());
			userText = true;
		}
		$('.input').val('');
		$('.input').removeClass('placeholder-text-left');
	});

	$(window).on('resize', function(){
		if ($(window).width() < 585){
			$('.main-subs').appendTo('.trans-subs');
			$('.main-info').appendTo('.trans-info');
		}
		else {
			$('.main-subs').appendTo('.content-block__information');
			$('.main-info').appendTo('.content-block__information');
		}
	});
});
