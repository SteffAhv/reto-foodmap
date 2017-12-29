// Inicializando el document

$(document).ready(function() {

	// Redireccionando a la vista home
	setTimeout(function() {
		window.location.href = 'views/home.html';
	}, 5000);
	setTimeout(function() {
		$('.flyed-text').removeClass('hide-text');
	}, 500);
});