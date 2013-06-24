/**
 * parallax is a jQuery plugin that applies parallax effect to background image.
 *
 * @name parallax
 * @author: Arthur Park
 * Source and example available at:
 * https://github.com/arthurpark/jquery.parallax.js
 */
(function($) {
  "use strict";

  var $window, windowHeight;

  $window = $(window);
  windowHeight = $window.height();

  $.fn.parallax = function(xPosition, speedFactor) {
    var $this, height, top, paddingTop;

    $this = $(this);
    height = $this.height();
    top = $this.offset().top;
    paddingTop = 0;

    // setup defaults if arguments aren't specified
    xPosition = xPosition || "50%";
    speedFactor = speedFactor || 0.1;

    // Update background position
    function update() {
      var scrollTop = $window.scrollTop();

      // Don't update background position
      if (top + height < scrollTop || top > scrollTop + windowHeight) {
        return;
      }

      $this.css('backgroundPosition', xPosition + " " + Math.round((top - scrollTop) * speedFactor) + "px");
    }

    $window.bind('scroll.parallax', update).resize(function() {
      windowHeight = $window.height();
      update();
    });

    // Update on initial scroll position
    update();
  };
})(jQuery);