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
});