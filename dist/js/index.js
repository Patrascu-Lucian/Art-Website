$(document).ready(function() {

  $(".gallery-img").click(function(event) {
    $src = $(this).parent().attr("src");

    if (!$("#light-box").length > 0) {

      $("body").append("<div id='light-box' style='display: none'><img src=''></div>");
      $("#light-box").fadeIn('fast');
      $("#light-box img").attr("src", $src);
      event.preventDefault();

    } else {
      $("#light-box").fadeIn('fast');
      $("#light-box img").attr("src", $src);
      event.preventDefault();
    }
  });

  $("body").on("click", '#light-box', function() {

    $('#light-box img').on('click', function(e) {
      e.stopPropagation();
    });

    $("#light-box").fadeOut('fast');
  });
});
