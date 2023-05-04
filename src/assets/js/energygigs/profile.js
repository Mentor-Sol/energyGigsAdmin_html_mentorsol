$('#search-icon').click(function() {
    $('input').prop('readonly', function(_, val) { return !val; });
  });