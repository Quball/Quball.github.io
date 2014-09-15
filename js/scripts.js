$(window).load(function(){
	imageViewer();
});

function imageViewer() {
	
	var modal = $('#img-modal'),
	modalImages = modal.children('img'),
	view = $('html, body'),
	codeSection =  $('.code-section'),
	xIcon = $('#close-icon'),
	imgDesc = $('#img-desc'),
	siblingImg;
	
	xIcon.on('click', closeModal);
	
	codeSection.on('click', '.img-btn', function(e){
		
		var clicked = $(this),
		clickedID = clicked.attr('data-id'),
		clickedAttr = clicked.find('p').html();

		siblingImg = modal.find('img[data-id="'+clickedID+'"]');
		var imgHeight = siblingImg[0].height + 40; //modal header 40px;
		
		modalImages.addClass('hidden');
		
		if(siblingImg.hasClass('open')) {
			closeModal(siblingImg);
			return;
		}
	
		modalImages.removeClass('open');
		siblingImg.addClass('open');
		siblingImg.removeClass('hidden');
		imgDesc.html(clickedAttr);
		modal.animate({height: imgHeight + 'px'}, 500);
		
		//scroll to top of current image
		view.animate({
			scrollTop : modal.offset().top
		}, 1000);
		
	});
	
	function closeModal() {
		siblingImg.removeClass('open');
		modal.animate({height: 0}, 500);
		view.animate({
			scrollTop : codeSection.offset().top
		}, 1000);
	}
	
	//move close icon right as width scrolling
	modal.bind('scroll', function() {
		var offset = modal.scrollLeft();
		xIcon.css('margin-right', -offset+'px');
	});
}