// Lazy Loader Script

document.addEventListener("DOMContentLoaded", function () {
  $(".lazy").lazy();
  $(".slick-slider").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    navigation: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$('.owl-carousel').owlCarousel({
  items:1,
  loop:false,
  center:true,
  margin:10,
  dots: true,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash'
});

$(".navbar-toggler").on("click", function() {
  $(this).parent().parent().toggleClass("toggled");
});

$(window).scroll(function () {
  var sticky = $(".navbar"),
    scroll = $(window).scrollTop();

  if (scroll >= 25) {
    // sticky.addClass("bg-light");
    sticky.addClass("navbar-light");
    sticky.removeClass("navbar-dark");
    $(".navbar-brand img").attr("src", "assets/img/logored.svg");
    sticky.addClass("fixed");
  } else {
    sticky.removeClass("fixed");
    sticky.addClass("navbar-dark");

    $(".navbar-brand img").attr("src", "assets/img/logo.svg");
  }
});
