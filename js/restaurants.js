// Inicializamos el document

$(document).ready(function() {
	// Accedemos a los keys de nuestra data 

	var peruviansFiltered = data.PERUVIAN;
	var japanesesFiltered = data.JAPANESE;
	var italiansFiltered = data.ITALIAN;
	var thaiFiltered = data.THAI;
	var fastFiltered = data.FAST;

	for (var item in peruviansFiltered) {
		console.log(peruviansFiltered[item].picture);
		$('#show-peruvians').append('<p>' + peruviansFiltered[item].name + '</p>');
		$('#show-peruvians').append('<img class="img-responsive"src="' + peruviansFiltered[item].picture + '">');
	}
	for (var item in japanesesFiltered) {
		console.log(japanesesFiltered[item].picture);
		$('#show-japaneses').append('<p>' + japanesesFiltered[item].name + '</p>');
		$('#show-japaneses').append('<img class="img-responsive"src="' + japanesesFiltered[item].picture + '">')
	}
	for (var item in italiansFiltered) {
		console.log(italiansFiltered[item].picture);
		$('#show-italians').append('<p>' + italiansFiltered[item].name + '</p>');
		$('#show-italians').append('<img class="img-responsive"src="' + italiansFiltered[item].picture + '">')
	}
	for (var item in thaiFiltered) {
		console.log(thaiFiltered[item].picture);
		$('#show-thai').append('<p>' + thaiFiltered[item].name + '</p>');
		$('#show-thai').append('<img class="img-responsive"src="' + thaiFiltered[item].picture + '">')
	}
	for (var item in fastFiltered) {
		console.log(fastFiltered[item].picture);
		$('#show-fast').append('<p>' + fastFiltered[item].name + '</p>');
		$('#show-fast').append('<img class="img-responsive"src="' + fastFiltered[item].picture + '">')
	}
	// Declaramos una variable que guardara la ruta local de nuestro archivo
	var path = window.location.hash;

	// Implementamos una condicional que mostrara solo los restaurantes que sean seleccionados
	if (path == '#show-peruvians') {
		$('#show-japaneses').fadeOut();
		$('#show-italians').fadeOut();
		$('#show-thai').fadeOut();
		$('#show-fast').fadeOut();

	} else if (path == '#show-japaneses') {
		$('#show-peruvians').fadeOut();
		$('#show-italians').fadeOut();
		$('#show-thai').fadeOut();
		$('#show-fast').fadeOut();

	} else if (path == '#show-italians') {
		$('#show-peruvians').fadeOut();
		$('#show-japaneses').fadeOut();
		$('#show-thai').fadeOut();
		$('#show-fast').fadeOut();

	} else if (path == '#show-thai') {
		$('#show-peruvians').fadeOut();
		$('#show-japaneses').fadeOut();
		$('#show-italians').fadeOut();
		$('#show-fast').fadeOut();

	} else if (path = '#show-fast') {
		$('#show-peruvians').fadeOut();
		$('#show-japaneses').fadeOut();
		$('#show-italians').fadeOut();
		$('#show-thai').fadeOut();
	} else { };
});
