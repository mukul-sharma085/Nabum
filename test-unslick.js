$(document).ready(function () {
         //new code below

   // Function to check if the viewport width is within mobile range and apply Slick Carousel
   function applySlickForMobile() {
    if ($(window).width() <= 480) {
      var container1 = $(".container1");
      var container2 = $(".container2");

      // Initialize Slick carousel for container
      container1.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        speed: 2000,
        arrows: false,
      });

      // Initialize Slick carousel for container2
      container2.slick({
        slidesToShow:1.5, //or .container2 { padding:0 20% 0 0 !important;}
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        speed: 2000,
        arrows: false,
      });

      // Function to scroll container to the end and reset
      function scrollContainerAndReset() {
        container1.slick("slickGoTo", 6); // Scroll to the next slide
        setTimeout(function () {
          container1.slick("slickGoTo", 0); // Reset back to the first slide after the scroll animation
        }, 2000);
      }

      // Function to scroll container2 to the 5th slide and reset
      function scrollContainer2AndReset() {
        container2.slick("slickGoTo", 4); // Scroll to the 5th slide
        setTimeout(function () {
          container2.slick("slickGoTo", 0); // Reset back to the first slide after the scroll animation
        }, 2000);
      }

      // Call the functions after a delay
      setTimeout(scrollContainerAndReset, 500);
      setTimeout(scrollContainer2AndReset, 4000);

      // Function to unslick the carousels after a certain time period
      setTimeout(function () {
        container1.slick("unslick");
        container2.slick("unslick");
      }, 7500); // Change 10000 to the desired time in milliseconds
    } else {
      // Deactivate Slick Carousel for desktop view
      $(".container1, .container2").slick("unslick");
    }
  }

  // Call the function when the page loads
  applySlickForMobile();

  // Listen for window resize event
  $(window).resize(function () {
    // Reapply Slick Carousel when the viewport width reaches less than or equal to 480px
    applySlickForMobile();
  });
});