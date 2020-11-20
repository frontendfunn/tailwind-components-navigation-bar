$(document).ready(function () {
  $(navToggler).on("click", function () {
    var target = $(this).data("target");
    $(target).animate({
      height: "toggle",
    });
  });
});
