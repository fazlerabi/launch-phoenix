$(function () {
  // $('#myBtn').click(function () {
  //   $('body').addClass('pop-up-open');
  //   $('.popup-box').show();
  // });
  // $('.close-btn').click(function () {
  //   $('body').removeClass('pop-up-open');
  //   $('.popup-box').hide();
  // });
  $(".circle-icon .btn").click(function () {
    console.log("here");
    $(this).parent().parent().find("video").trigger("play");
    $(this).parent().parent().find("video").attr("controls", true);
    $(this).parent().hide();
  });
  /**************** Progrss bar script*********************** */
});

$(function () {
  var $section = $("#home");
  var $queue = $({});

  function loadDaBars() {
    $(".progress > div").each(function () {
      $(this).css({ width: 0 });
    });
    var $meters = $(".active.tab-pane .progress > div");
    $meters.each(function () {
      var $el = $(this);
      var origWidth = $el.parents().attr("bar-width");
      $el.animate({ width: origWidth }, 500);
    });
  }

  $(document).bind("scroll", function (ev) {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $section.offset().top - window.innerHeight;
    if (scrollOffset > containerOffset) {
      loadDaBars();
      // unbind event not to load scrolsl again
      $(document).unbind("scroll");
    }
  });

  $(".phoenix-tabs .nav-item").on("click", function () {
    setTimeout(function () {
      loadDaBars();
    }, 300);
  });
});

var triggered = false;

$(document).ready(function () {
  $(".content1").hide();
  setTimeout(function () {
    if (!triggered) {
      $(".main-modal-wrapper").addClass("show");
      $(".main-modal-wrapper").css({ display: "block" });
    }
  }, 15000);

  var interval = setInterval(function () {
    if (
      $(".klaviyo-form")
        .text()
        .includes("Your entry has been received!")
    ) {
      clearInterval(interval);
      $(".klaviyo-form").parent().parent().parent().addClass("modelOnSubmit");
      $(".content2").hide();
      $(".content1").show();
      $(".klaviyo-form").parent().addClass("success-message");
      // $(".modal-body").append(
      //   '<a class="success-btn" target="_blank" href="https://www.getmyphoenix.com/phoenix/">Get The Phoenix Now!</a><p class="success-coupon">Use coupon <b>VALENTINE</b> for <b>$150 off</b></p>'
      // );
      localStorage.setItem("email", true);
      // $(".klaviyo-form").hide();
    }
  }, 100);

  $(".main-modal-wrapper").on("show.bs.modal", function () {
    triggered = true;
  });
});

$(".custom-close-btn").on("click", function () {
  $(".main-modal-wrapper").css({ display: "none" });
});
$(".cct-discount-close").on("click", function () {
  $(".cct-discount-btn").css({ display: "none" });
});
