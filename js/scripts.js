$(function(){
	$('#main-menu').slicknav({
		prependTo:'#mobileMenu',
		closeOnClick: true
	});

	$('#menu').slicknav({
		prependTo:'#demo1'
	});
	
	$('#menu2').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce",
		prependTo:'#demo2'
	});
	
	$(document).on('click', "#main-menu .scroll, #demo1 .scroll, .slicknav_menu .scroll", function(e) {
        e.preventDefault();
		var h = $('#nav').outerHeight();
		if (!$('#main-menu').is(":visible")) {
			h = $('.slicknav_menu .slicknav_btn').outerHeight();
		}
		var link = this;
		$.smoothScroll({
			offset: -h,
			scrollTarget: link.hash
		});
	});
});