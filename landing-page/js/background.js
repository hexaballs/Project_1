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

	// //configuration
	// var width = 360;
	// var animationSpeed = 1500;
	// var pause = 4000;
	// var currentSlide = 1;

	// // cache DOM
	// var $slider = $('#slider');
	// var $slideContainer = $slider.find('.slides');
	// var $slides = $slideContainer.find('.slide');
	// $slideContainer.append($slides.first().clone());

	// // var interval;

	// function startSlider(){
	// 	interval = setInterval(function() {
	// 		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
	// 			currentSlide++;
	// 			if (currentSlide === $slides.length+1) {
	// 				currentSlide = 1;
	// 				$slideContainer.css('margin-left', 0);
	// 			}
	// 		});

	// 	}, pause);

	// }

	// function stopSlider() {
	// 	clearInterval(interval);
	// }
	var width = 360;
	var currentSlide = 0;	

	$('#bgBtn').on("click", function(event) {
		event.preventDefault();
		$('.content-section-a').css('background-color', bgColor1());
		$('.content-section-a h2').css('color', bgColor2());
		$('.content-section-a p').css('color', bgColor3());
		$('#slider').find('.slides').animate({'margin-left': '-='+width}, 500, function() {
			currentSlide++;
			// if (currentSlide === $slides.length) {
			// 	currentSlide = 0;
			// 	$slider.find('.slides').css('margin-left', 0);
			// }

		});
	});

	// $('#bgBtn').on("click", function() {
	// 	$slideContainer.animate('margin-left': '-='+width), animationSpeed, function() {
	// 		currentSlide++;
	// 	};
	// });

});