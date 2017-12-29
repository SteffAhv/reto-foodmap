window.addEventListener('load', function() {
	var containerMap = document.getElementById('container-map');
	navigator.geolocation.getCurrentPosition(succes, notSucces);

	function succes(rta) {
		var latitude = rta.coords.latitude;
		var longitude = rta.coords.longitude;

		var googleLatLong = new google.maps.LatLng(latitude, longitude);
		var objConfiguration = {
			zoom: 17,
			center: googleLatLong,
		}
		var googleMap = new google.maps.Map(containerMap, objConfiguration);
		var objConfigMarker = {
			position: googleLatLong,
			map: googleMap,
			title: ' Ud esta aqui:',
		}
		var googleMarker = new google.maps.Marker(objConfigMarker);
	};
	function notSucces() {
		// var altMap = document.getElementById('map-display');
		// altMap.classList.toggle('show-alt');
	};
});