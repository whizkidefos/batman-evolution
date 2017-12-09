$(document).ready(function(){
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass('sticky-header'));

  $(window).on('scroll', function(){
    var scrollFromTop = $(window).scrollTop();
    $('body').toggleClass('scroll', (scrollFromTop > 350));
  });

  //SMOOTH scroll
  $('.menu li a[href^="#"]').on('click', function(e){
    e.preventDefault();

    var target = $(this.hash);
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top -100
      }, 1000);
    }
  });

// ======== RESPONSIVE MENU ====
var body = $('body');
var mainOverlay = $('.js-main-overlay');
var  menuTrigger = $('.menu-trigger');

menuTrigger.on('click', function(){
  body.addClass('menu-active');
});
$('.menu li a').on('click', function(){
  body.removeClass('menu-active');
});
mainOverlay.on('click', function(){
  body.removeClass('menu-active');
});


// ==== MASONRY grid
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 120,
    fitWidth: true,
    transitionDuration: '0.8s',
    stagger: 30,
    horizontalOrder: false,
    gutter: 0
  });

  //===== SLICK slider
  $('.slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});
