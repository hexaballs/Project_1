$(document).ready(function () {


	// Random hex config
	function bgColor1() {
		return ('#' + Math.random().toString(16).slice(2, 8));
	};

	function bgColor2() {
		return ('#' + Math.random().toString(16).slice(2, 8));
	};

	function bgColor3() {
		return ('#' + Math.random().toString(16).slice(2, 8));
	};

	var width = 360;
	var currentSlide = 0;	
	$('#slider').find('.slides').append($('#slider').find('.slides').find('.slide').first().clone());

	$('#bgBtn').on("click", function(event) {
		event.preventDefault();
		$('.content-section-a').css('background-color', bgColor1());
		$('.content-section-a h2').css('color', bgColor2());
		$('.content-section-a p').css('color', bgColor3());
		$('#slider').find('.slides').animate({'margin-left': '-='+width}, 300, function() {
			currentSlide++;
			if (currentSlide === $('#slider').find('.slides').find('.slide').length) {
				currentSlide = 1;
				$('#slider').find('.slides').css('margin-left', 0);
			}

		});
	});
});