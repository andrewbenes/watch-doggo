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

  //Price updater 

  var basePrice = 349;

  $(".pricing").change(function () {
    newPrice = basePrice;

    $('.pricing option:selected').each(function () {
      newPrice += $(this).data('price')
    });

    $('#item-price').html(newPrice);

  });

  //Show email address input

  $('#38mm').click(function () {
    if ($(this).is(':checked')) {
      $('label[for="email-address"]').show('slow');
      $('#email-address').fadeIn('slow');
    }
  });

  $('#42mm').click(function () {
    if ($(this).is(':checked')) {
      $('label[for="email-address"]').show('slow');
      $('#email-address').fadeIn('slow');
    }
  });

});