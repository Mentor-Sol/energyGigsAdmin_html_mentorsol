// function toggleSelection() {
//   var checkbox = document.getElementById("checkbox");
//   var card = document.querySelector(".selectable-card");
//   var imageContainer = card.querySelector(".image-container");

//   checkbox.checked = !checkbox.checked;
//   card.classList.toggle("selected");
//   imageContainer.classList.toggle("selected");

//   var image = card.querySelector(".image");
//   if (checkbox.checked) {
//     // Checkbox is checked
//     image.style.border = "4px dotted #ff0000";
//   } else {
//     // Checkbox is unchecked
//     image.style.border = "";
//   }
// }

// function toggleSelection() {
//   var checkbox = document.getElementById("checkbox-2");
//   var card = document.querySelector(".selectable-card-2");
//   var imageContainer = card.querySelector(".image-container-2");

//   checkbox.checked = !checkbox.checked;
//   card.classList.toggle("selected");
//   imageContainer.classList.toggle("selected");

//   var image = card.querySelector(".image-2");
//   if (checkbox.checked) {
//     // Checkbox is checked
//     image.style.border = "4px solid #ff0000";
//   } else {
//     // Checkbox is unchecked
//     image.style.border = "";
//   }
// }

function toggleSelection(checkboxId, elementId) {
  var checkbox = document.getElementById(checkboxId);

  var image = document.getElementById(elementId);
  if (elementId === "lacation-image") {
    if (checkbox.checked) {
      debugger;

      // Checkbox is checked
      image.src = "assets/images/location-preference/location-color.svg";
      console.log(image); // Change the image source to the selected image
    } else {
      // Checkbox is unchecked
      image.style.border = "";
      image.src = "assets/images/location-preference/location-dark.svg"; // Change the image source back to the original image
    }
  } else if (elementId === "factory-image") {
    if (checkbox.checked) {
      // Checkbox is checked
      image.src = "assets/images/location-preference/location-color.svg"; // Change the image source to the selected image
    } else {
      // Checkbox is unchecked
      image.style.border = "";
      image.src = "assets/images/location-preference/location-dark.svg"; // Change the image source back to the original image
    }
  }
}
function toggleSelection1(checkboxId, elementId) {
  var checkbox = document.getElementById(checkboxId);

  var image = document.getElementById(elementId);
  if (checkbox.checked) {
    // Checkbox is checked
    image.src = "assets/images/location-preference/factory-color.svg";
    console.log(image); // Change the image source to the selected image
  } else {
    // Checkbox is unchecked
    image.style.border = "";
    image.src = "assets/images/location-preference/factory-dark.svg"; // Change the image source back to the original image
  }
}
