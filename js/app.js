// NAVBAR
$(document).ready(function () {
  let nav_offset_top = $(".header").height();

  function navbarFixed() {
    if ($(".header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header .main-menu").addClass("navbar_fixed");
        } else {
          $(".header .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});

// PROJECT BUTTONS
document.getElementById("cv").onclick = function () {
  location.href = "../html/CV.html";
};

// CONTACT FORM
$(document).ready(function () {
  $(".contact-form")
    .find(".form-control")
    .each(function () {
      var targetItem = $(this).parent();
      if ($(this).val()) {
        $(targetItem).find("label").css({
          top: "10px",
          fontSize: "14px",
        });
      }
    });
  $(".contact-form")
    .find(".form-control")
    .focus(function () {
      $(this).parent(".input-block").addClass("focus");
      $(this).parent().find("label").animate(
        {
          top: "10px",
          fontSize: "14px",
        },
        300
      );
    });
  $(".contact-form")
    .find(".form-control")
    .blur(function () {
      if ($(this).val().length == 0) {
        $(this).parent(".input-block").removeClass("focus");
        $(this).parent().find("label").animate(
          {
            top: "25px",
            fontSize: "18px",
          },
          300
        );
      }
    });
});
