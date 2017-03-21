//Smooth scrolling all the way

$(document).ready(function () {

  $("a").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });
  
  var basePrice = 349;

$(".vars").change(function() {
    newPrice = basePrice;

    $('.vars option:selected').each(function() {
        newPrice += $(this).data('price')
    });
    
    $('#item-price').html(newPrice);

});

  });
