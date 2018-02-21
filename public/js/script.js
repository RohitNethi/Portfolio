
$( document ).ready(function(){

    var options = {
        strings: ["Designer.", "Developer."],
        typeSpeed: 100,
        typeDelay: 1600,
        showCursor: false,
        loop: true,
        loopCount: 0,
        backSpeed: 100,
        backDelay: 2000
      }

      $( ".heading_primary--sub--typed" ).typed(options);

// Smooth Scrolling

// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

$( '.skills_content-icon' ).each(function() {
  animationHover(this, 'bounce');
});

});

function animationHover(element, animation){
  element = $(element);
  element.hover(
      function() {
          element.addClass('animated ' + animation);        
      },
      function(){
          //wait for animation to finish before removing classes
          window.setTimeout( function(){
              element.removeClass('animated ' + animation);
          }, 1000);         
      });
}