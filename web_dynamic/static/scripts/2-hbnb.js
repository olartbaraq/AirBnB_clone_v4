$(document).ready(function() {
    let checkboxAmenities = {};
    $(document).on('change', "input[type='checkbox']", function() {
	if (this.checked) {
	    checkboxAmenities[$(this).data('id')] = $(this).data('name');
	} else {
	    delete checkboxAmenities[$(this).data('id')];
	}
	let list = Object.values(checkboxAmenities);
	if (list.length > 0) {
	    $('div.amenities > h4').text(Object.values(checkboxAmenities).join(', '));
	} else {
	    $('div.amenities > h4').html('&nbsp;');
	}
    });
    $.get("http://0.0.0.0:5001/api/v1/status/", function(data, docStatus) {
      if (docStatus === 'success') {
	if (data.status === 'OK') {
	  $('#api_status').addClass('available');
	} else {
	  $('#api_status').removeClass('available');
	}
      }
    });
});
