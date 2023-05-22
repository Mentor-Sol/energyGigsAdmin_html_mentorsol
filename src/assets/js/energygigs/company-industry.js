$(document).ready(function () {
  $("#myCheckbox").change(function () {
    var isChecked = $(this).is(":checked");
    var picture = $("#picture");

    // Change the background of the picture based on the checkbox state
    if (isChecked) {
      picture.parent().addClass("checked");
    } else {
      picture.parent().removeClass("checked");
    }
  });
});
