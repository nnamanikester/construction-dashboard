$(document).ready(function () {
  /* Sticky Navigation  */

  $(".js--section-services").waypoint(
    function (direction) {
      if (direction == "down") {
        $("header").addClass("sticky");
        $(".js--scroll-topbtn").css("display", "flex");
      } else {
        $("header").removeClass("sticky");
        $(".js--scroll-topbtn").css("display", "none");
      }
    },
    {
      offset: "60px;",
    }
  );

  /* Scroll on Buttons */

  // $(".js--scroll-to-plan").click(function () {
  //   $("html, body").animate(
  //     { scrollTop: $(".js--section-plans").offset().top },
  //     1500
  //   );
  // });

  /**Scroll to top btn */

  $(".js--scroll-topbtn").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--scroll-top").offset().top },
      1000
    );
  });

  /* Navigation Scroll */

  $(function () {
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $("html, body").animate(
              {
                scrollTop: target.offset().top,
              },
              630
              // function () {
              //   // Callback after animation
              //   // Must change focus!
              //   var $target = $(target);
              //   $target.focus();
              //   if ($target.is(":focus")) {
              //     // Checking if the target was focused
              //     return false;
              //   } else {
              //     $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              //     $target.focus(); // Set focus again
              //   }
              // }
            );
          }
        }
      });
  });

  /* Animation on scroll */

  // $(".js--wp-1").waypoint(
  //   function (direction) {
  //     $(".js--wp-1").addClass("animated fadeIn");
  //   },
  //   {
  //     offset: "50%",
  //   }
  // );

  // $(".js--wp-2").waypoint(
  //   function (direction) {
  //     $(".js--wp-2").addClass("animated fadeInUp");
  //   },
  //   {
  //     offset: "50%",
  //   }
  // );

  // $(".js--wp-3").waypoint(
  //   function (direction) {
  //     $(".js--wp-3").addClass("animated fadeIn");
  //   },
  //   {
  //     offset: "50%",
  //   }
  // );

  // $(".js--wp-4").waypoint(
  //   function (direction) {
  //     $(".js--wp-4").addClass("animated pulse");
  //   },
  //   {
  //     offset: "50%",
  //   }
  // );

  /* Mobile Navigation */

  // $(".js--nav-icon").click(function () {
  //   var nav = $(".js--main_nav");
  //   var icon = $(".js--nav-icon");

  //   nav.slideToggle(200);
  //   if (icon.hasClass("ion-ios-menu")) {
  //     icon.addClass("ion-ios-close");
  //     icon.removeClass("ion-ios-menu");
  //   } else {
  //     icon.removeClass("ion-ios-close");
  //     icon.addClass("ion-ios-menu");
  //   }
  // });
});
