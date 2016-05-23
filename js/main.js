$(document).ready(function() {
  skrollr.init({
    smoothScrolling: true,
    scale: 2,
    easing: 'swing'
  });

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
  $('.portfolio-box').hover(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).find('.project-title').fadeToggle();
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

// MODAL BLUR
  $('#skup, #nawozy, #nasiona').on('show.bs.modal', function () {
     $('section, .stuff, .container').addClass('blur');
  })

  $('#skup, #nawozy, #nasiona').on('hide.bs.modal', function () {
     $('section, .stuff, .container').removeClass('blur');
  })

});
