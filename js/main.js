$( document ).ready(function() {
    $('body').chardinJs('start');

    $( ".button" ).click(function() {
	  $( 'body' ).chardinJs('start');
	});

    $(function () {
	  $.scrollUp({
	    scrollName: 'scrollUp', 
	    topDistance: '400', 
	    topSpeed: 300, 
	    animation: 'fade', 
	    animationInSpeed: 200, 
	    animationOutSpeed: 200, 
	    scrollText: 'Scroll to top', 
	    activeOverlay: false, 
	  });
	});


});

