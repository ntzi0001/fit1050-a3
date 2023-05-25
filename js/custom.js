
  (function ($) {
  
  "use strict";

    // HERO SLIDE
    $('.hero-slide').backstretch([
      "images/slideshow/commodore.webp",
      "images/slideshow/two_minis.webp",
      "images/slideshow/beetle.webp"
    ],  {duration: 3000, fade: 750});

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);


