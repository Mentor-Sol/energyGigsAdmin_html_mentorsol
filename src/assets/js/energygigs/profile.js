$(document).ready(function () {
  $("#edit-company-icon").click(function () {
    $("#company-input").removeAttr("readonly").focus();
  });

  $("#edit-description-icon").click(function () {
    $("#description-input").removeAttr("readonly").focus();
  });
});

//creating pill using select 2

$(document).ready(function () {
  $("#industries-add-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#profileSkillDropdown").toggleClass("show"); // Toggle the dropdown display
  });

  // Function to handle pill deletion
  function deletePill() {
    $(this).closest("li.nav-item").remove();
  }

  $(".profileCatergoryMenu").on("click", ".dropdown-item", function () {
    var selectedCategory = $(this).text();
    var pillId = "pill-" + selectedCategory.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="mt-2 badge rounded-pill bg-primary bg-opacity-10 mx-2 px-2 py-2 font-size-12 text-themeblack custom-hover" href="#' +
        pillId +
        '">' +
        selectedCategory +
        ' <span class="pill-delete-icon text-white bg-primary rounded-circle px-1 mx-1">&times;</span></a></li>'
    );

    // Add click event listener to the delete icon
    pillElement.find(".pill-delete-icon").click(deletePill);

    $("#profile-category-container").append(pillElement);
  });

  $("#profileAddCatergorySearchInput").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();

    $(".profileCatergoryMenu .dropdown-item").each(function () {
      var optionText = $(this).text().toLowerCase();
      var isMatch = optionText.includes(searchTerm);

      $(this).toggle(isMatch);
    });
  });

  // Add click event listener to existing pills for deletion
  $("#profile-category-container").on("click", ".pill-delete-icon", deletePill);
});

$(document).ready(function () {
  $("#profile-skill-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#profileSkillDropdown").toggleClass("show"); // Toggle the dropdown display
  });

  // Function to handle pill deletion
  function deletePill() {
    $(this).closest("li.nav-item").remove();
  }

  $(".profileSkillMenu").on("click", ".dropdown-item", function () {
    var selectedCategory = $(this).text();
    var pillId = "pill-" + selectedCategory.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="mt-2 badge rounded-pill bg-primary bg-opacity-10 mx-2 px-2 py-2 font-size-12 text-themeblack custom-hover" href="#' +
        pillId +
        '">' +
        selectedCategory +
        ' <span class="pill-delete-icon text-white bg-primary rounded-circle px-1 mx-1">&times;</span></a></li>'
    );

    // Add click event listener to the delete icon
    pillElement.find(".pill-delete-icon").click(deletePill);

    $("#profile-skill-container").append(pillElement);
  });

  $("#profileSkillSearchInput").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();

    $(".profileSkillMenu .dropdown-item").each(function () {
      var optionText = $(this).text().toLowerCase();
      var isMatch = optionText.includes(searchTerm);

      $(this).toggle(isMatch);
    });
  });

  // Add click event listener to existing pills for deletion
  $("#profile-skill-container").on("click", ".pill-delete-icon", deletePill);
});

$(document).ready(function () {
  $("#profile-language-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior
    $("#profileLanguageDropdown").toggleClass("show"); // Toggle the dropdown display
  });

  // Function to handle pill deletion
  function deletePill() {
    $(this).closest("li.nav-item").remove();
  }

  $(".profileLanguageMenu").on("click", ".dropdown-item", function () {
    var selectedCategory = $(this).text();
    var pillId = "pill-" + selectedCategory.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="mt-2 badge rounded-pill bg-primary bg-opacity-10 mx-2 px-2 py-2 font-size-12 text-themeblack custom-hover" href="#' +
        pillId +
        '">' +
        selectedCategory +
        ' <span class="pill-delete-icon text-white bg-primary rounded-circle px-1 mx-1">&times;</span></a></li>'
    );

    // Add click event listener to the delete icon
    pillElement.find(".pill-delete-icon").click(deletePill);

    $("#profile-language-container").append(pillElement);
  });

  $("#LanguageSearchInput").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();

    $(".profileLanguageMenu .dropdown-item").each(function () {
      var optionText = $(this).text().toLowerCase();
      var isMatch = optionText.includes(searchTerm);

      $(this).toggle(isMatch);
    });
  });

  // Add click event listener to existing pills for deletion
  $("#profile-language-container").on("click", ".pill-delete-icon", deletePill);
});
