
$(window).on('load',function() {
	$(".loader").fadeOut("fast");
  $("#overlayer").fadeOut("fast");
  $('body').removeClass('loading');
  $('.anime').addClass('animated bounceIn')

  
});

  

  
  
  $(document).ready(function() {



  $(window).scroll(function () {
    var top = $(".top-bar").outerHeight();
    if ($(window).scrollTop() > 0) {
     
      $('.top-bar').css('top', -top)
      $('header').addClass('fixx');
      
    }else {
      $('header').removeClass('fixx');
      $('.top-bar').css('top', 0)
    }
  })
  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = $(".top-bar").outerHeight();
var navbarHeight = $('header').outerHeight();



$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('foldIn').addClass('foldOut');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('foldOut').addClass('foldIn');
        }
    }
    
    lastScrollTop = st;
}






var $window = $(window);
function scroll_elements1(){
  var scroll = $window.scrollTop();
  var scrollLayer1 = scroll/1.4;
  var scrollLayer2 = scroll/1.8;
  
 
  $(".layer-hero").css(
    "-webkit-transform","translate3d(0," +  scrollLayer2  + "px,0)",
            "transform","translate3d(0," +  scrollLayer2  + "px,0)"
  );
}

$window.scroll(scroll_elements1);


function scroll_elements(){
  var scroll = $window.scrollTop();
  var scrollLayer1 = scroll/1.4;
  var scrollLayer2 = scroll/3;
  

  $(".layer3").css(
    "-webkit-transform","translate3d(0," +  scrollLayer2  + "px,0)",
            "transform","translate3d(0," +  scrollLayer2  + "px,0)"
  );
}

$window.scroll(scroll_elements);



//  first image paralax 
if ($('.why').length){
function scroll_element1(){
  var scroll =$(window).scrollTop() - $('.why').offset().top ;
 
  var scrollLayer2 = scroll/3;

  $(".layer1").css(
    "-webkit-transform","translate3d(0," +  scrollLayer2  + "px,0)",
            "transform","translate3d(0," +  scrollLayer2  + "px,0)"
  );
}

$(window).scroll(scroll_element1);
}


// second image paralax
if ($('.get-in').length) {
function scroll_element2(){
  var scroll =$(window).scrollTop() - $('.get-in').offset().top ;
 
  var scrollLayer2 = scroll/3;

  $(".layer2").css(
    "-webkit-transform","translate3d(0," +  scrollLayer2  + "px,0)",
            "transform","translate3d(0," +  scrollLayer2  + "px,0)"
  );
}

$(window).scroll(scroll_element2);
}

// services page parallax 

if ($('.half-serv').length) {
$(window).scroll(function () {
  $('.serv-layer').each(function() {
    var one_paral = $(this).parents('.half-serv');
    var scroll =$(window).scrollTop() - $(this).offset().top ;
     
      var scrollLayer2 = scroll/3;
  
      $(this).css(
        "-webkit-transform","translate3d(0," +  scrollLayer2  + "px,0)",
                "transform","translate3d(0," +  scrollLayer2  + "px,0)"
      );
    
  });
})
}





  
$(document).click(function(e) {
	if (!$(e.target).is('.panel-body')) {
    	$('.collapse').collapse('hide');	    
    }
});


if ($('.counterr').length !== 0) {
  const el = document.querySelector( '.counterr' )
  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"
  new Waypoint( {
      element: el,
      handler: function() { 
          counterUp( el, {
            duration: 10000,
            delay: 16,
          } ),
           
          this.destroy()
      },
      offset: 'bottom-in-view',
  } );
}else {
  return;
}






$('.nav-item').on('click',function () {
  $('img.stroke').removeClass('slidee');
  $($(this).children('a').attr('href')).find('img.stroke').addClass('slidee');
})

  });



// scroll down hero section
$(function() {
  $('a#down').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


// protofolio slider ---------------------
if ($('.swiper-container').length) {
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  loop:true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:true,
});
}
var swiper = new Swiper('.swiper-containerr', {
  speed: 1000,
  parallax: true,
  autoplay:true,
  loop:true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.swiper-slide').on('mouseover', function() {
  swiper.autoplay.stop();
});

$('.swiper-slide').on('mouseout', function() {
  swiper.autoplay.start();
});



if($(".single-serv-page .panel-collapse").length) {
$('.panel-collapse').on('shown.bs.collapse', function(e) {
  var $panel = $(this).closest('.panel');
  $('html,body').animate({
    scrollTop: $panel.offset().top - 70
  }, 500);
});
}
if ($(".services-item .collapse").length) {
  $('.collapse').on('shown.bs.collapse', function(e) {
    var $card = $(this).closest('.card');
    $('html,body').animate({
      scrollTop: $card.offset().top - 70
    }, 500);
  });
  }

var wow = new WOW(
  {
  
    offset:100,          // distance to the element when triggering the animation (default is 0)
 
  }
);

   
wow.init();


$('.filters ul li').click(function(){
  $('.filters ul li').removeClass('active');
  $(this).addClass('active');
  
  var data = $(this).attr('data-filter');
  $grid.isotope({
    filter: data
  })
});

var $grid = $(".grid").isotope({
  itemSelector: '.all',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: ".all"
  },

});
