
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
	/*$(window).on('scroll touchmove', function () {
		$('.inst_logo').toggleClass('vis_by_opacity',$(document).scrollTop() != 0);
		$('.line_draw').toggleClass('vis_by_opacity',$(document).scrollTop() != 0);
		$('.header').toggleClass('little_header', $(document).scrollTop() != 0);
	});

	$(".header_input").on('focus', function () {
		$('.header_input_box').css('backgroundPosition', '5% 50%');
		$('.header_input').addClass('placeholder_text_left');
		$('.delete_search_button').removeClass('vis_by_opacity');
	});

	$('.header_input').on('blur', function () {
		$('.header_input_box').css('backgroundPosition', '35% 50%');
		$('.header_input').removeClass('placeholder_text_left');
		$('.header_input').val('');
		$('.delete_search_button').addClass('vis_by_opacity');
	});

	$(window).on('resize', function(){
		$('.in_header_left').toggleClass('in_header_parts_display_by_resize',$(window).width() <= 700);
		$('.in_header_center').toggleClass('in_header_parts_display_by_resize',$(window).width() <= 400);
	});*/
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
