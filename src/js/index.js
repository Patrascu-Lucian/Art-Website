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
  var $gallery = $(".gallery-img");
  var $lightBox = $('.light-box');
  var $lightBoxClose = $lightBox.find('.light-box__close');

  // On gallery image click event handling
  $gallery.click(function(event) {
    $(this).next($lightBox).fadeIn(200);
  });

  // close handling
  // On button
  $($lightBoxClose).click(function (e) {
    $(this).parent().parent().fadeOut(200);
  });

  // On dark space
  $lightBox.click(function (e) {

    if($(e.target).hasClass('light-box') ) {
        $(this).fadeOut(200);
   }

  });


  // Smooth anchor scrolling
  $("a[href^=\\#]").click(function(e) {
    e.preventDefault();

    history.pushState(null, null, dest);

    var dest = $(this).attr('href');

    console.log(dest);

    $('html, body').animate({
      scrollTop: $(dest).offset().top
    }, 400, 'swing');
  });

});
