// Validate the form on submission
$("form.needs-validation").on("submit", function (event) {
  if (this.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  $(this).addClass("was-validated");
});

// Reset validation when input value changes
$("form.needs-validation :input").on("input", function () {
  $(this).removeClass("is-invalid");
  $(this).next(".invalid-feedback").hide();
});
