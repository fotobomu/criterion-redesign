$(function() {

	$('.fa-bars').on('click', function(){
		$('ul.navigation').addClass('open');
	});

	$('ul.navigation li a').on('click', function(){
		$('ul.navigation').removeClass('open');
	});

});