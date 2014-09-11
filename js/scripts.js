var infoBox = $('#info');
var infoField = $('#info p');
var menuItems = $('header ul>li');

menuItems.on('click', function(e){

	var dataActive = $(this);
	var data = dataActive.attr('data-info');
	
	if(dataActive.hasClass('active')) {
		infoBox.removeClass('open');
		dataActive.removeClass('active');
		return false;
	}
	
	menuItems.removeClass('active');
	dataActive.addClass('active');
	
	infoField.html(data);
	infoBox.addClass('open');
	
	// if mail: href = mailto:tsn1985@gmail.com
	// if adr: href = googlemaps
	// if tel: no href, only 47831605
});