$(document).ready(function(){
	// Footer section - show current year
	var current_year = new Date().getFullYear();
	$('#current-year').text(current_year);

	$(document).on('click', '.work__item', function (e) {
			e.stopPropagation(); 
			$('#work').toggleClass('active');

			// 1. Toggle the clicked item and close others
			$(this).toggleClass('active').blur();
			$('.work__item').not(this).removeClass('active');

			$('html, body').animate({ scrollTop: 0 }, 500);
	});

	// Escape key to close work item
	$(document).on('keydown', function(event) {
			if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
					// Your code here
					$('#work, .work__item').removeClass('active');
			}
	});
	
	// show ai-gen
	if (window.location.href.includes('/post/')) {
			$('#work, .work__item').addClass('active');
	}
});

$(window).load(function() {
	$('.preloader-wrapper').fadeOut();
	$('.page-content').fadeIn();
	$('body').addClass('scroll');
});