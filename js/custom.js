(function($) {
  var mainApp = {

    main_fun: function() {
      /*====================================
       CUSTOM LINKS SCROLLING FUNCTION, NAVI SCROLL
      ======================================*/

      $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target ||
            $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
              .animate({
                scrollTop: targetOffset
              }, 800); //set scroll speed here
            return false;
          }
        }
      });

      $("#Reading").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 38,
        textSize: 88,
        text: 'Reading',
        textStyle: 'font-size: 12px;',
        textColor: '#CCFFFF'
      });

      $("#Writing").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 58,
        textSize: 88,
        text: 'Writing',
        textStyle: 'font-size: 12px;',
        textColor: '#CCFFFF'
      });

      $("#Communication").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 78,
        textSize: 38,
        text: 'Communication',
        textStyle: 'font-size: 12px;',
        textColor: '#CCFFFF'
      });

      $("#Teamwork").circliful({
        animation: 1,
        animationStep: 5,
        foregroundBorderWidth: 15,
        backgroundBorderWidth: 15,
        percent: 68,
        textSize: 38,
        text: 'Team Work',
        textStyle: 'font-size: 12px;',
        textColor: '#CCFFFF'
      });

      $('a#downloadResume').attr({
        target: '_blank',
        href: '../staticFiles/files/Li-Yang Chen Resume.pdf'
      });

    },

    initialization: function() {
      mainApp.main_fun();
    }

  }
  // Initializing ///

  $(document).ready(function() {
    //work section caption
    $("[rel='tooltip']").tooltip();
    $('.thumbnail').hover(
      function() {
        $(this).find('.caption').slideDown(250); //.fadeIn(250)
      },
      function() {
        $(this).find('.caption').slideUp(250); //.fadeOut(205)
      }
    );
    $('a#downloadResume').attr({
      target: '_blank',
      href: '../image/Resume.docx'
    });

    mainApp.main_fun();



  });

}(jQuery));
