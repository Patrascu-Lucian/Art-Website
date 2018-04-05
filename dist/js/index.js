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

    $(this).siblings('.light-box').fadeIn(200);

  });

  $('.light-box__close').click(function (e) {
    $(this).parent().parent().fadeOut(200);
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
