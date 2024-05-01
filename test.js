$(document).ready(function() {
    var container = $('.container1');
    var container2 = $('.container2');
    var isMobileScriptApplied = false; // Flag to track if the script has been applied for mobile view

    // Function to scroll to left with smooth return
    function scrollToLeftCategory() {
        var scrollLeft = container.scrollLeft();
        var nextPosition = scrollLeft + container.width();
        container.animate({
            scrollLeft: nextPosition
        }, 2000, function() {
            // Animation complete, smoothly return to original position
            container.animate({
                scrollLeft: 0
            }, 2000);
        });
    }

    function scrollToLeftCard() {
        var scrollLeft = container2.scrollLeft();
        var nextPosition = container2.children().eq(4).position().left; // Scroll to the position of the 5th child
        container2.animate({
            scrollLeft: nextPosition
        }, 4000, function() {
            // Animation complete, smoothly return to original position
            container2.animate({
                scrollLeft: 0
            }, 4000);
        });
    }

    // Function to check if the viewport width is within mobile range and apply the script
    function applyScrollEffectForMobile() {
        if ($(window).width() <= 480 && !isMobileScriptApplied) {
            // Call scrollToLeft() function after 1 second (1000 milliseconds) delay
            setTimeout(scrollToLeftCategory, 500);
            setTimeout(scrollToLeftCard, 4500);
            isMobileScriptApplied = true; // Set the flag to indicate that the script has been applied for mobile view
        }
    }

    // Call the function when the page loads
    applyScrollEffectForMobile();

    // Listen for window resize event
    $(window).resize(function() {
        // Reapply the scroll effect when the viewport width reaches less than or equal to 480px
        applyScrollEffectForMobile();
    });
});