/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	$( document ).ready( function( )
	{
		new ScrollFlow(); 
	} );

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {
		var	$window = $(window),
			$body = $('body');
		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});
		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});
		// Scrolly.
		$('.scrolly').scrolly();
		$("#navigation").hide();
		var lastHeight = 0;
		var currentHeight = 0;
		$window.scroll(function(e) {
			lastHeight = currentHeight;
			currentHeight = $(window).scrollTop();
			$("#navigation").show();
			if(lastHeight < currentHeight || currentHeight > 100){
				$("#navigation").removeClass('slide-up');
				$("#navigation").addClass('slide-down');
			}else{
				$("#navigation").removeClass('slide-down');
				$("#navigation").addClass('slide-up');
			}
		});

	});

})(jQuery);