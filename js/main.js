$(document).ready(function () {

  $('.jobs__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.team__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.menu a').click(function(){
    var element = $(this).attr('href');
    var dist = $(element).offset().top;

    $('html, body').animate({'scrollTop': dist}, 500);

    return false;

  
  });

  
  $('.menu').removeClass('default');
  $(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
      $('.menu').addClass('default').fadeIn('fast');
    } else {
      $('.menu').removeClass('default').fadeIn('fast');
    }
  });
 

});




