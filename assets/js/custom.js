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
  let $section = $("#home");
  let $queue = $({});

  function loadDaBars() {
    $(".progress > div").each(function () {
      $(this).css({ width: 0 });
    });
    let $meters = $(".active.tab-pane .progress > div");
    $meters.each(function () {
      let $el = $(this);
      let origWidth = $el.parents().attr("bar-width");
      $el.animate({ width: origWidth }, 500);
    });
  }

  $(document).bind("scroll", function (ev) {
    let scrollOffset = $(document).scrollTop();
    let containerOffset = $section.offset().top - window.innerHeight;
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

let triggered = false;

$(document).ready(function () {
  $(".content1").hide();
  setTimeout(function () {
    if (!triggered) {
      $(".main-modal-wrapper").addClass("show");
      $(".main-modal-wrapper").css({ display: "block" });
    }
  }, 15000);

  let interval = setInterval(function () {
    if ($(".klaviyo-form").text().includes("Your entry has been received!")) {
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

let TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length;
  let fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  let that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  let elements = document.getElementsByClassName("typewrite");
  for (let i = 0; i < elements.length; i++) {
    let toRotate = elements[i].getAttribute("data-type");
    let period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  let css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
