// Inicializamos el document
$(document).ready(function () {
    var peruvians = data.PERUVIAN;
    console.log(peruvians)
    for (var item in peruvians) {
        console.log(peruvians[item].picture)
        $('#show-peruvians').append('<p>' + peruvians[item].name + '</p>');
        $('#show-peruvians').append('<img class="img-responsive"src="' + peruvians[item].picture + '">')
    }
});


