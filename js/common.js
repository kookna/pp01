// header
$(window).on('load resize scroll', function () {
	var w_top = $(window).scrollTop();
	if (w_top > 100) {
		$(".header-wrap").addClass("js-fixed");
	} else {
		$(".header-wrap").removeClass("js-fixed");
	}

});


