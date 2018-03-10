$(document).ready(function() {

  $(".gallery-img").click(function(event) {

    $(".navbar").slideUp('fast');

    $src = $(this).parent().attr("src");
    $desc = $(this).parent().siblings("p").html();
    $title = $(this).parent().siblings("h1").html();

    if (!$("#light-box").length > 0) {

      $("body").append(`<div id='light-box' style='display: none'>
          <button type="button" class="close text-white"><span aria-hidden="true">&times;</span>
          </button>
          <div class="row justify-content-center align-items-center">
            <div class='col-lg-9'>
              <h1></h1>
              <img src=''>
            </div>
            <div class='col-lg-3'>
              <p></p>
            </div>
          </div>
        </div>`);

      $("#light-box").fadeIn('fast');
      $("#light-box img").attr("src", $src);
      $("#light-box p").html($desc);
      $("#light-box h1").html($title);

      event.preventDefault();

    } else {

      $("#light-box").fadeIn('fast');
      $("#light-box img").attr("src", $src);
      $("#light-box p").html($desc);
      $("#light-box h1").html($title);

      event.preventDefault();
    }

  });

  $("body").on("click", '#light-box', function() {

    $('#light-box img').on('click', function(e) {
      e.stopPropagation();
    });

    $("#light-box").fadeOut('fast');
    $(".navbar").slideDown('fast');

  });

});
