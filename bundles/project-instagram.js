$(function(){
	$.fn.textWidth = function(text, font) {
    	if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    	$.fn.textWidth.fakeEl.text(text || this.val() || this.text()).css('font', font || this.css('font'));
    	return $.fn.textWidth.fakeEl.width();
	};
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

	storyCounter = 15;
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
		var imageCounter = 17;
		var needStatus = $(document).height() - $('.content-block__posts').height() - $('.footer').height() - $(window).height();
		if ($(document).scrollTop() > needStatus && storyCounter < imageCounter) {
			if ((imageCounter - storyCounter) >= 3) {
				var delta = 3;
				storyCounter = storyCounter + 3;
			}
			else {
				var delta = imageCounter % 3;
				storyCounter = storyCounter + imageCounter % 3;
			}
			$('.original-posts__content').append('<div class="content-block__posts new"></div>');
			for (var i = 0; i<3; i++, delta--){
				if(delta > 0){
					var deltaImage = storyCounter - delta +1;
					var deltaCode = '<a class="post-image" href=""><img style="width: 100%;" src="images/posts-sketch/' + deltaImage + '.png"></a>';
					$('.original-posts__content').children().last().append(deltaCode);
				}
				else {
					$('.original-posts__content').children().last().append('<a class="post-image" href=""></a>');
				}
			}
		}
	});

	userText = false;
	
	$('.reset-button').on('mousedown', function () {
		$('.input').val('');
		$('.input').attr('placeholder', 'Поиск');
		$('.input').css('background-position-x',"");
		userText = false;
	});
	$('.input').on('keypress', function () {
		if ($('.input').val().length >= 1){
			$('.input').attr('placeholder', 'Поиск');
			$('.input').css('background-position-x', "");
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
			if ($('.input').textWidth() <= 161) {
				$('.input').attr('placeholder', $("input").val());
				var margin = (($('.input').width())/ 2) - $('.input').textWidth() / 1.95 + 10;
				$('.input').css('background-position-x',margin);
				userText = true;
			}
			else {
				$('.input').attr('placeholder', $("input").val());
				$('.input').css('background-position-x','7px');
				userText = true;
			}
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
