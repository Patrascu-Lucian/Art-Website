// Form validation JS Handling
var form = document.querySelector('.needs-validation');

form.addEventListener('submit', function(event){
  if (form.checkValidity() === false){
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
});

// JQuery
$(document).ready(function() {

  // Smooth anchor scrolling
  $("a[href^=\\#]").click(function(e) {
    e.preventDefault();
    history.pushState(null, null, dest);
    var dest = $(this).attr('href');
    console.log(dest);
    $('html,body').animate({
      scrollTop: $(dest).offset().top
    }, 'normal');
  });

  // Lightbox
  $(".gallery-img").click(function(event) {
    $(".navbar").slideUp('fast');

    $srcSplit = $(this).attr("src").split("-");
    $src = $srcSplit[0] + ".jpg";

    $desc = $(this).parent().siblings("p").html();
    $title = $(this).parent().siblings("h1").html();

    if (!$("#light-box").length > 0) {
      $("body").append(`<div id='light-box' style='display: none' class="row align-items-center justify-content-center mx-auto">
            <button type="button" class="close text-white"><span aria-hidden="true">&times;</span>
            </button>
          <div class='col-lg'>
            <h1></h1>
            <img src=''>
          </div>
          <div class='col-lg col-xl-3'>
            <p></p>
          </div>
        </div>`
      );

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

  // Light box close handling
  $("body").on("click", '#light-box', function() {

    $('#light-box img').on('click', function(e) {
      e.stopPropagation();
    });

    $("#light-box").fadeOut('fast');
    $(".navbar").slideDown('fast');

  });

});
