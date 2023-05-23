function toggleSelection() {
  var checkbox = document.getElementById("checkbox");
  var card = document.querySelector(".selectable-card");
  var imageContainer = card.querySelector(".image-container");

  checkbox.checked = !checkbox.checked;
  card.classList.toggle("selected");
  imageContainer.classList.toggle("selected");

  var image = card.querySelector(".image");
  if (checkbox.checked) {
    // Checkbox is checked
    image.style.border = "4px solid #ff0000";
  } else {
    // Checkbox is unchecked
    image.style.border = "";
  }
}

function toggleSelection() {
  var checkbox = document.getElementById("checkbox-2");
  var card = document.querySelector(".selectable-card-2");
  var imageContainer = card.querySelector(".image-container-2");

  checkbox.checked = !checkbox.checked;
  card.classList.toggle("selected");
  imageContainer.classList.toggle("selected");

  var image = card.querySelector(".image-2");
  if (checkbox.checked) {
    // Checkbox is checked
    image.style.border = "4px solid #ff0000";
  } else {
    // Checkbox is unchecked
    image.style.border = "";
  }
}
