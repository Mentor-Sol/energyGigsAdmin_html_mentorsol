$('#heading-icon').click(function() {
  $(this).parent().prev().prop('readonly', function(_, val) { return !val; });
});

$('#para-icon').click(function() {
  $(this).parent().prev().prop('readonly', function(_, val) { return !val; });
});