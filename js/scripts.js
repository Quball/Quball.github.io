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
		
		if(clickedAlt == modalImg.attr('alt')) {
			closeModal();
			return;
		}
		
		title.html(clicked.attr('alt'));
		modalImg.attr('src', clickedSrc);
		modalImg.attr('alt', clickedAlt);
		console.log(modalImg.width());
		modal.addClass('active');
		
		//scroll to top of current image
		view.animate({
			scrollTop : modal.offset().top
		}, 1000);
	});
	
	function closeModal() {
		modal.removeClass('active');
		modalImg.attr('src', '');
		modalImg.attr('alt', '');
	}
	
	//move close icon right as width scrolling
	modal.bind('scroll', function() {
		var offset = modal.scrollLeft();
		xIcon.css('margin-right', -offset+'px');
	});
}