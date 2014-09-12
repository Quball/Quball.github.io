$(window).on('load', function(){
	imageViewer();
});

function imageViewer() {
	
	var modal = $('#modal'),
	modalImg = $('#modal img'),
	view = $('html, body'),
	close = $('#close-icon'),
	title = $('#close-icon p'),
	xIcon = $('#close-icon span'),
	windowW = $(document).width();
	
	$('#close-icon').on('click', closeModal);
	
	$('footer img.footerImg').on('click', function(e){
		e.preventDefault;
		var clicked = $(this);
		var clickedSrc = clicked.attr('src');
		var clickedAlt = clicked.attr('alt');
		
		console.log(clickedAlt, modalImg.attr('alt'));
		
		if(clickedAlt == modalImg.attr('alt')) {
			closeModal();
			return;
		}
		
		title.html(clicked.attr('alt'));
		modalImg.attr('src', clickedSrc);
		modalImg.attr('alt', clickedAlt);
		modal.addClass('active');
		
		view.animate({
			scrollTop : modal.offset().top
		}, 1000);
	});
	
	function closeModal() {
		modal.removeClass('active');
		modalImg.attr('src', '');
		modalImg.attr('alt', '');
	}
	
	modal.bind('scroll', function() {
		console.log('doin it');
		var offset = modal.scrollLeft();
		console.log($(this).scrollLeft());
		xIcon.css('margin-right', -offset+'px');
		console.log(xIcon.css('margin-right'));
	});
}