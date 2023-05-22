$(document).ready(function () {
  $("#edit-company-icon").click(function () {
    $("#company-input").removeAttr("readonly").focus();
  });

  $("#edit-description-icon").click(function () {
    $("#description-input").removeAttr("readonly").focus();
  });
});

//pill generation

$(document).ready(function () {
  $("#add-category-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var pillText = "New Category"; // Text for the new pill
    var pillId = "pill-" + pillText.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="badge rounded-pill bg-primary bg-opacity-10 m-1 p-2  font-size-12 text-primary custom-hover" href="#' +
        pillId +
        '">' +
        pillText +
        "</a></li>"
    );
    $("#category-container").append(pillElement);
  });
});

$(document).ready(function () {
  $("#add-skills-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var pillText = "New Skill"; // Text for the new pill
    var pillId = "pill-" + pillText.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="badge rounded-pill bg-primary bg-opacity-10 m-1 p-2  font-size-12 text-primary custom-hover" href="#' +
        pillId +
        '">' +
        pillText +
        "</a></li>"
    );
    $("#skill-pill-container").append(pillElement);
  });
});

$(document).ready(function () {
  $("#add-language-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var pillText = "New Language"; // Text for the new pill
    var pillId = "pill-" + pillText.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="badge rounded-pill bg-primary bg-opacity-10 m-1 p-2  font-size-12 text-primary custom-hover" href="#' +
        pillId +
        '">' +
        pillText +
        "</a></li>"
    );
    $("#language-pill-container").append(pillElement);
  });
});

$(document).ready(function () {
  $("#add-experience-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var pillText = "New Language"; // Text for the new pill
    var pillId = "pill-" + pillText.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="badge rounded-pill bg-primary bg-opacity-10 m-1 p-2  font-size-12 text-primary custom-hover" href="#' +
        pillId +
        '">' +
        pillText +
        "</a></li>"
    );
    $("#experience-pill-container").append(pillElement);
  });
});

$(document).ready(function () {
  $("#add-Certification-link").click(function (event) {
    event.preventDefault(); // Prevent the default link behavior

    var pillText = "New Language"; // Text for the new pill
    var pillId = "pill-" + pillText.toLowerCase().replace(/\s+/g, "-");

    var pillElement = $(
      '<li class="nav-item"><a class="badge rounded-pill bg-primary bg-opacity-10 m-1 p-2  font-size-12 text-primary custom-hover" href="#' +
        pillId +
        '">' +
        pillText +
        "</a></li>"
    );
    $("#certification-pill-container").append(pillElement);
  });
});
