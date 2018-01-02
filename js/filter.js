// Inicializamos el document

// Dibujamos la tabla que implementamos como busqueda interna del input
$(document).ready(function() {

  var filter = $('#table').DataTable();

  $('#input-filter').keyup(function() {

    filter.search($(this).val()).draw();

    if ($('#input-filter').val() == '') {
      $('.filters-content').fadeOut();
    } else {
      $('.filters-content').fadeIn();
    }
  });

  // Implementando el evento mouseover a las imagenes default vista home

  var imgsDefault = $('.thumbnail');

  $(imgsDefault).mouseover(function() {
    $(this).css('background-color', 'grey');
    $('.thumbnail img', this).css('opacity', '1');
  });
  $(imgsDefault).mouseout(function () {
    $(this).css('background-color', 'white');
    $('.thumbnail img', this).css('opacity', '0.5');
  });
});
