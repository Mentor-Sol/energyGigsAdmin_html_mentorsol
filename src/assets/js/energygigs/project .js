$(document).ready(function () {
  $("#category-add-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#categoryDropdown").toggleClass("show"); // Toggle the dropdown display
  });

  // Function to handle pill deletion
  function deletePill() {
    $(this).closest("li.nav-item").remove();
  }

  $(".categoryList").on("click", ".dropdown-item", function () {
    var selectedCategory = $(this).text();
    var pillId = "pill-" + selectedCategory.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="mt-2 badge rounded-pill  bg-primary bg-opacity-10 mx-2 px-2 py-2 font-size-12 text-themeblack custom-hover" href="#' +
        pillId +
        '">' +
        selectedCategory +
        ' <span class="pill-delete-icon bg-primary text-white rounded-circle px-1 mx-1">&times;</span></a></li>'
    );

    // Add click event listener to the delete icon
    pillElement.find(".pill-delete-icon").click(deletePill);

    $("#project-category-container").append(pillElement);
  });

  $("#categorySearchInput").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();

    $(".categoryList .dropdown-item").each(function () {
      var optionText = $(this).text().toLowerCase();
      var isMatch = optionText.includes(searchTerm);

      $(this).toggle(isMatch);
    });
  });

  // Add click event listener to existing pills for deletion
  $("#project-category-container").on("click", ".pill-delete-icon", deletePill);
});

$(document).ready(function () {
  $("#industries-add-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#industriesDropdown").toggleClass("show"); // Toggle the dropdown display
  });

  // Function to handle pill deletion
  function deletePill() {
    $(this).closest("li.nav-item").remove();
  }

  $(".secondMenu").on("click", ".dropdown-item", function () {
    var selectedCategory = $(this).text();
    var pillId = "pill-" + selectedCategory.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="mt-2 badge rounded-pill bg-blueColor bg-opacity-10 mx-2 px-2 py-2 font-size-12 text-themeblack custom-hover" href="#' +
        pillId +
        '">' +
        selectedCategory +
        ' <span class="pill-delete-icon text-white bg-blueColor rounded-circle px-1 mx-1">&times;</span></a></li>'
    );

    // Add click event listener to the delete icon
    pillElement.find(".pill-delete-icon").click(deletePill);

    $("#industries-skill-container").append(pillElement);
  });

  $("#industriesSearchInput").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();

    $(".secondMenu .dropdown-item").each(function () {
      var optionText = $(this).text().toLowerCase();
      var isMatch = optionText.includes(searchTerm);

      $(this).toggle(isMatch);
    });
  });

  // Add click event listener to existing pills for deletion
  $("#industries-skill-container").on("click", ".pill-delete-icon", deletePill);
});
