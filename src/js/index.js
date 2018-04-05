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

  // Lightbox variables
  $(".gallery-img").click(function(event) {
    var $navBar = $(".navbar");

    var $srcSplit = $(this).attr("src").split("-");
    var $src = $srcSplit[0] + ".jpg";

    var $desc = $(this).parent().siblings("p").html();
    var $title = $(this).parent().siblings("h1").html();

    var $body = $("body");

    // Light box functionality
    function lBcontrol() {
      $navBar.slideUp(300);

      var $lightBox = $("#light-box");
      var $img = $lightBox.find("img");
      var $para = $lightBox.find("p");
      var $heading = $lightBox.find("heading");

      $lightBox.fadeIn('fast');
      $img.attr("src", $src);
      $para.html($desc);
      $heading.html($title);

      event.preventDefault();
    }

    // if there is no lightbox, insert one
    if (!$("#light-box").length > 0) {
      $body.append(`<div id='light-box' style='display: none' class="row align-items-center justify-content-center mx-auto">
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

      lBcontrol();

    } else {

      lBcontrol();
    }

  });

  // Light box close handling
  $("body").on("click", '#light-box', function() {

    $('#light-box img').on('click', function(e) {
      e.stopPropagation();
    });

    $("#light-box").fadeOut(300);
    $(".navbar").slideDown(300);

  });

  // Smooth anchor scrolling
  $("a[href^=\\#]").click(function(e) {
    e.preventDefault();
    history.pushState(null, null, dest);
    var dest = $(this).attr('href');
    console.log(dest);
    $('html, body').animate({
      scrollTop: $(dest).offset().top
    }, 300);
  });

});
