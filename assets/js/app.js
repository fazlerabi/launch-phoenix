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

var owl = $('.owl-carousel').owlCarousel({
  items:1,
  loop:false,
  center:true,
  margin:10,
  dots: true,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash'
});
owl.on('changed.owl.carousel', function(event) {
  const selIndex = $('.owl-dots').find('.active').index();
  $('.slider-thumbnail').removeClass('active');
  $($('.slider-thumbnails').find('a')[selIndex]).addClass('active');
});

$(".navbar-toggler").on("click", function() {
  $(this).parent().parent().toggleClass("toggled");
});

$(".get-discount").on("click", function() {
  var $this = $(this);
  var email = $this.parent().parent().parent().find(".enter-email-discount").val();
  if (email && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    $.ajax({
      url: "https://a.klaviyo.com/ajax/subscriptions/subscribe",
      method: "POST",
      data: {
        g: "Y88ag3",
        $fields: "$source,$email,$consent_method,$consent_form_id,$consent_form_version",
        $source: "The Phoenix",
        $email: $this.parent().parent().parent().find(".enter-email-discount").val(),
        $consent_method: "Klaviyo Form",
        $consent_form_id: "XsfBr6",
        $consent_form_version: "2312983"
      },
      success: function(result){
        $this.parent().parent().parent().parent().find(".coupon-success-card").removeClass("d-none");
        $this.closest('.modal-body').find('.content1').show();
        $this.closest('.modal-body').find('.content2').hide();
        $this.parent().parent().parent().parent().find(".subscription-card").addClass("d-none");
      }
    });
  }
});

$(".coupon-close").on("click", function() {
  $(".coupon-success-card").addClass("d-none");
  $(".subscription-card").removeClass("d-none");
});

$(window).scroll(function () {
  var sticky = $(".navbar"),
    scroll = $(window).scrollTop();

  if (scroll >= 25) {
    // sticky.addClass("bg-light");
    sticky.addClass("navbar-light");
    sticky.removeClass("navbar-dark");
    $(".navbar-brand img").attr("src", "assets/img/logored.svg");
    $(".navbar-brand img").addClass("logored");
    sticky.addClass("fixed");
  } else {
    sticky.removeClass("fixed");
    sticky.addClass("navbar-dark");

    $(".navbar-brand img").attr("src", "assets/img/logo.svg");
  }
});
