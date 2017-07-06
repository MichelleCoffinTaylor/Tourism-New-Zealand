function initMap() {

	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map'), {
			
			center:{
			//  This is where the map will be positioned when loaded
			lat: -41.3508692,
			lng: 174.6383904
			},
		//  This is how far the map will be zoomed in
		zoom: 8,
		//  Enabling the user to drag around the map
		draggable: true,
		//  Disabling the double click zoom (NOT NEEDED FOR MOBILE)
		disableDoubleClickZoom: true,
		//  Disabling the use of a scroll wheel (NOT NEEDED FOR MOBILE)
		scrollwheel: false,
		//  Disabling toggling between the different map types
		//  eg. Map and satellite
		mapTypeControl: false,
		//  Disabling the ability to open the map fullscreen
		fullscreenControl: false,
			//  Changing the position of the zoom control buttons
			zoomControl: true,
				zoomControlOptions: {
				position: google.maps.ControlPosition.TOP_LEFT
			},
		});
//	Directions (Starting Point to End Point)
directionsDisplay.setMap(map);

	var onChangeHandler = function() {
	calculateAndDisplayRoute(directionsService, directionsDisplay);
	};
	document.getElementById('start').addEventListener('change', onChangeHandler);
	document.getElementById('end').addEventListener('change', onChangeHandler);
	}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	directionsService.route({
	origin: document.getElementById('start').value,
	destination: document.getElementById('end').value,
	travelMode: 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
		} else {
			//	Fix this (Some how remove)
			('Directions request failed due to no end point' + status);
		}
	});
}


