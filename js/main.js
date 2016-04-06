$(document).ready(function() {
  skrollr.init({
    smoothScrolling: true,
    scale: 2,
    easing: 'swing'
  });

  var slideTopPosisition = [0, 1200, 2400, 3600, 4800, 6000, 7200];

  var animateScrollNext = function(duration) {
    if(currentSlide==0)
    {
      currentSlide += 1;
    }
    $('html, body').animate({ scrollTop: slideTopPosisition[currentSlide+1] }, duration);
  }
  var animateScrollPrev = function(duration) {
     $('html, body').animate({ scrollTop: slideTopPosisition[currentSlide-1] }, duration);
  }

  var currentSlide = 0,
      $nextButton = $('#next');
      $prevButton = $('#prev');


//Sticky Navigation
  $("#navigation").sticky({topSpacing:0});

// NAVIGATION

$('.nav a.colapse-menu1').click(function () {
  $(".nav-collapse").collapse("hide")
});

//Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

// TITLE FADE OUT AND IN
  $('.portfolio-box').hover(function() {
    $(this).find('.project-title').fadeToggle()
  })


// LIST MORE LESS
  $('ul.collapse').wrap('<div class="collapseWrapper" />');
  $('div.collapseWrapper').css({ 'height' : '250px' }).after('<a href="#" class="collapseMore btn btn-success btn-green">POKAŻ WIĘCEJ</a>');

  $('a.collapseMore').click(function () {
      if ($(this).hasClass('expanded')) {
          $(this).prev().animate({ height: '250px' }, 500);
          $(this).text('POKAŻ WIĘCEJ').removeClass('expanded');
      }
      else {
          $(this).prev().animate({ height: $(this).prev().find( 'ul.collapse' ).outerHeight(true) }, 500);
          $(this).text('POKAŻ MNIEJ').addClass('expanded');
      }
      return false;
  });

});
