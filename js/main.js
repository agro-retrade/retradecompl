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

//Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

// TITLE FADE OUT AND IN
  $('.portfolio-box').hover(function() {
    $(this).find('.project-title').fadeToggle()
  })

});
